'use client'
import React, { useEffect } from 'react'
import Fluid from './Simulator'
import Initialize from './Initialize'

const Sim = ({ tag = undefined }) => {
  const scene = {
    gravity : 0,
    dt : 1 / 120,
    iterations : 5,
    frame_nr : 0,
    over_relaxation : 1.9,
    obstacle_x : 0,
    obstacle_y : 0,
    obstacle_r : .025,
    count : 0
  }
  
  const aspect = 1
  const c_w = 500 * aspect
  const c_h = 500 / aspect

  // set resolution/element size
  const resolution = 300
  const y_cells = resolution
  const x_cells = Math.floor(resolution * aspect)
  const h = 1 / resolution
  const element = [
    h, h, h,
    h, -h, h,
    -h, h, h,
    -h, h, h,
    h, -h, h,
    -h, -h, h
  ]

  let flu = new Fluid(1000, x_cells, y_cells, h)
  flu.init(Initialize)

  useEffect (() => {
    // init mat4/canvas/context
    let mat4 = require('gl-mat4')
    const canvas = document.getElementById('fluid')
    const gl = canvas.getContext('webgl')

    // device width/height is aspect ratio and limit drawn pixels
    canvas.width = c_w
    canvas.height = c_h

    //CHANGE TO 2D
    let mesh_vertices = new Float32Array(flu.y_dim * flu.x_dim * 2 * 6)
    mesh_vertices = create_mesh(mesh_vertices, element)
    let color_data = new Float32Array(x_cells * y_cells * 3 * 6)
    let uniform_location = initialize_gl()

    update()

    function initialize_gl () {
      if (!gl) {
        throw new Error('WebGL not supported.')
      }

      const position_buffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer)
      gl.bufferData(gl.ARRAY_BUFFER, mesh_vertices, gl.STATIC_DRAW)

      const vertex_shader = gl.createShader(gl.VERTEX_SHADER)
      gl.shaderSource(vertex_shader,
        `precision lowp float;
        attribute vec3 position;
        attribute vec3 color;
        varying vec3 vertex_color;
        uniform mat4 matrix;
        
        void main() {
          vertex_color = color;
          gl_Position = matrix * vec4(position, 1);
        }`
      )
      gl.compileShader(vertex_shader)

      const color_buffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer)

      const fragment_shader = gl.createShader(gl.FRAGMENT_SHADER)
      gl.shaderSource(fragment_shader,
        `precision lowp float;
        varying vec3 vertex_color;
        
        void main() {
          gl_FragColor = vec4(vertex_color, 1);
        }`
      )
      gl.compileShader(fragment_shader)

      const program = gl.createProgram()
      gl.attachShader(program, vertex_shader)
      gl.attachShader(program, fragment_shader)
      gl.linkProgram(program)

      const position_location = gl.getAttribLocation(program, 'position')
      gl.enableVertexAttribArray(position_location)
      gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer)
      gl.vertexAttribPointer(position_location, 2, gl.FLOAT, false, 0, 0)

      const color_location = gl.getAttribLocation(program, 'color')
      gl.enableVertexAttribArray(color_location)
      gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer)
      gl.vertexAttribPointer(color_location, 3, gl.FLOAT, false, 0, 0)

      const uniform_location = {
        matrix : gl.getUniformLocation(program, `matrix`)
      }

      gl.useProgram(program)

      return uniform_location
    }

    function create_mesh (mesh_vertices, element) {
      const n = y_cells
      let idx = 0
      let offset_x
      let offset_y

      offset_y = y_cells / 2 * h + (resolution - 2 ) / 2 * h
      offset_x = x_cells / 2 * h + (resolution - 2 ) / 2 * h
  
      for (let x = 0; x < x_cells - 0; x++) {
        for (let y = 0; y < y_cells - 0; y++) {
          for (let i = 0; i < 6; i++) {
            // 2 points per vertex times 6 vertices per element times x/y loops
            idx = x * n * 12 + y * 12 + i * 2
            mesh_vertices[idx] = element[i * 3] + 2 * x * h - offset_x
            mesh_vertices[idx + 1] = element[i * 3 + 1] + 2 * y * h - offset_y
          }
        }
      }
      return mesh_vertices
    }

    function gl_color (dta) {
      const n = y_cells
      let idx = 0
      let r, g, b

      for (let x = 0; x < x_cells - 0; x++) {
        for (let y = 0; y < y_cells - 0; y++) {
          for (let i = 0; i < 6; i++) {
            let val = flu.d[(x+1)*flu.y_dim + (y+1)]

            // 3 points per vertex times 6 vertices per element times x/y loops
            idx = x * n * 18 + y * 18 + i * 3
            dta[idx] = val * 225 / 256 + .15
            dta[idx + 1] = val * 200 / 256 + .5
            dta[idx + 2] = val * 200 / 256 + .75
          }
        }
      }
      return dta
    }

    function gl_draw () {
      color_data = gl_color(color_data)

      gl.bufferData(gl.ARRAY_BUFFER, color_data, gl.STATIC_DRAW)

      let view_matrix = mat4.create()

      gl.uniformMatrix4fv(uniform_location.matrix, false, view_matrix)

      // GL SETTINGS
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      gl.drawArrays(gl.TRIANGLES, 0, color_data.length)
    }

    function update () {
      flu.simulate({scene})
      gl_draw()
      scene.frame_nr++
      requestAnimationFrame(update)
    }

    function interact (x, y, reset) {
      let vx = 0
      let vy = 0

      if (!reset) {
        vx = (x - scene.obstacle_x) / scene.dt
        vy = (y - scene.obstacle_y) / scene.dt
      }

      scene.obstacle_x = x
      scene.obstacle_y = y
      const r = scene.obstacle_r
      const n = flu.y_dim

      for (let i = 2; i < flu.x_dim - 2; i++) {
        for (let j = 2; j < flu.y_dim - 2; j++) {
          flu.s[i*n +j] = 1

          let dx = (i + 0.5) * flu.h - x
          let dy = (j + 0.5) * flu.h - y

          if (dx * dx + dy * dy < r * r) {
            flu.s[i*n + (n - j)] = 1.0
            flu.d[i*n + (n - j)] = 0.5 + Math.sin(0.1 * scene.frame_nr) / 2
            flu.u[i*n + (n - j)] = vx
            flu.u[(i+1)*n + (n - j)] = vx
            flu.v[i*n + (n - j)] = -vy
            flu.v[i*n + (n - j)+1] = -vy
          }
        }
      }
    }

    var mouseDown = false;

    function startDrag(x, y) {
      mouseDown = true;
      x = x / window.innerWidth * aspect
      y = y / window.innerHeight
      interact(x, y, true);
    }

    function drag(x, y) {
      if (mouseDown) {
        x = x / window.innerWidth * aspect
        y = y / window.innerHeight
        interact(x, y, false);
      }
    }

    function endDrag() {
      mouseDown = false;
    }

    if (tag === undefined) {
      canvas.addEventListener('mousedown', event => {
        startDrag(event.offsetX, event.offsetY);
      });
    
      canvas.addEventListener('mouseup', event => {
        endDrag();
      });
    
      canvas.addEventListener('mousemove', event => {
        drag(event.offsetX, event.offsetY);
      });
    
      canvas.addEventListener('touchstart', event => {
        startDrag(event.touches[0].clientX, event.touches[0].clientY)
      });
    
      canvas.addEventListener('touchend', event => {
        endDrag()
      });
      canvas.addEventListener('touchmove', event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        drag(event.touches[0].clientX, event.touches[0].clientY)
      }, { passive: false});
    } else {
      const hero = document.getElementById(tag)
      hero.addEventListener('mousedown', event => {
        startDrag(event.offsetX, event.offsetY);
      });
    
      hero.addEventListener('mouseup', event => {
        endDrag();
      });
    
      hero.addEventListener('mousemove', event => {
        drag(event.offsetX, event.offsetY);
      });
    
      hero.addEventListener('touchstart', event => {
        startDrag(event.touches[0].clientX, event.touches[0].clientY)
      });
    
      hero.addEventListener('touchend', event => {
        endDrag()
      });
      hero.addEventListener('touchmove', event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        drag(event.touches[0].clientX, event.touches[0].clientY)
      }, { passive: false});
  }

    return () => {
      if (tag === undefined) {
        canvas.dispose()
      } else {
        hero.dispose()
    }
      
    }

  }, [])

  return (
    <canvas id='fluid' width={c_w} height={c_h} className='w-full h-full'></canvas>
  )
}

export default Sim