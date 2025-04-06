const U_FIELD = 0
const V_FIELD = 1
const S_FIELD = 2

class Fluid {
    constructor (rho, x_dim, y_dim, h) {
      // fluid density, x/y resolutions, element height as percentage
      this.rho = rho
      this.x_dim = x_dim + 2
      this.y_dim = y_dim + 2
      this.h = h
  
      // fluid "density" or cell fullness, pressure/smoke fields
      this.d = new Float32Array(this.x_dim * this.y_dim)
      this.d_new = new Float32Array(this.x_dim * this.y_dim)
      this.p = new Float32Array(this.x_dim * this.y_dim)
      this.s = new Float32Array(this.x_dim * this.y_dim)
  
      // horizontal/vertical velocity right/up positive
      this.u = new Float32Array(this.x_dim * this.y_dim)
      this.v = new Float32Array(this.x_dim * this.y_dim)
      this.u_new = new Float32Array(this.x_dim * this.y_dim)
      this.v_new = new Float32Array(this.x_dim * this.y_dim)
  
      //
    }
  
  
    // simulation routine
    integrate (dt, gravity) {
      const n = this.y_dim
      for (let i = 1; i < this.x_dim; i++ ) {
        for (let j = 1; j < this.y_dim - 1; j++) {
          if (this.s[i*n + j] != 0.0 && this.s[i*n + j - 1] != 0.0) {
            this.v[i*n + j] += gravity * dt
          }
        }
      }
    }
  
    solve_incompressibility (over_relaxation, iterations, dt) {
      const n = this.y_dim
      const cp = this.rho * this.h / dt
  
      for (let k = 0; k < iterations; k++) {
        for (let i = 1; i < this.x_dim - 1; i++) {
          for (let j = 1; j < this.y_dim - 1; j++) {
            
            if (this.s[i*n + j] == 0.0) {
              continue
            }
            // in = out
            let s = this.s[i*n + j]
            let sx0 = this.s[(i-1)*n + j]
            let sx1 = this.s[(i+1)*n + j]
            let sy0 = this.s[i*n + j-1]
            let sy1 = this.s[i*n + j+1]
            s = sx0 + sx1 + sy0 + sy1
            // confirm
            if (s == 0.0) {
              continue
            }
  
            let div = this.u[(i+1)*n + j] - this.u[i*n + j] +
                      this.v[i*n + j+1] - this.v[i*n + j]
  
            let p = -div / s
            p *= over_relaxation
            this.p[i*n + j] += cp * p
  
            this.u[i*n + j] -= sx0 * p
            this.u[(i+1)*n + j] += sx1 * p
            this.v[i*n + j] -= sy0 * p
            this.v[i*n + j+1] += sy1 * p              
          }
        }
      }
    }
  
    extrapolate () {
      const n = this.y_dim
      for (let i = 0; i < this.x_dim; i++) {
        this.u[i*n + 0] = this.u[i*n + 1]
        this.u[i*n + this.y_dim - 1] = this.u[i*n + this.y_dim - 2]
      }
  
      for (let j = 0; j < this.y_dim; j++) {
        this.v[0*n + j] = this.v[1*n + j]
        this.v[(this.x_dim-1)*n + j] = this.v[(this.x_dim-2)*n + j]
      }
    }
  
    sample_field (x, y, field) {
      const n = this.y_dim
      const h1 = 1 / this.h
      const h2 = this.h / 2
  
      x = Math.max(Math.min(x, this.x_dim * this.h), this.h)
      y = Math.max(Math.min(y, this.y_dim * this.h), this.h)
  
      let dx = 0.0
      let dy = 0.0
  
      let f
  
      switch (field) {
        case U_FIELD: f = this.u; dy = h2; break;
        case V_FIELD: f = this.v; dx = h2; break;
        case S_FIELD: f = this.d; dx = h2; dy = h2; break;
      }
  
      let x0 = Math.min(Math.floor((x - dx) * h1), this.x_dim - 1)
      let tx = ((x - dx) - x0 * this.h) * h1
      let x1 = Math.min(x0 + 1, this.x_dim - 1)
  
      let y0 = Math.min(Math.floor((y - dy) * h1), this.y_dim - 1)
      let ty = ((y - dy) - y0 * this.h) * h1
      let y1 = Math.min(y0 + 1, this.y_dim - 1)
  
      let sx = 1.0 - tx
      let sy = 1.0 - ty
  
      let val = sx * sy * f[x0 * n + y0] +
                tx * sy * f[x1 * n + y0] +
                tx * ty * f[x1 * n + y1] +
                sx * ty * f[x0 * n + y1]
  
      return val
    }
  
    u_average (i, j) {
      const n = this.y_dim
      let u = (this.u[i*n + j-1] + this.u[i*n + j] +
              this.u[(i+1)*n + j-1] + this.u[(i+1)*n + j]) / 4
      
      return u
    }
  
    v_average (i, j) {
      const n = this.y_dim
      let v = (this.v[(i-1)*n + j] + this.v[i*n + j] +
                this.v[(i-1)*n + j+1] + this.v[i*n + j+1]) / 4
    
      return v
    }
  
    advect_velocity (count, dt) {
      this.u_new.set(this.u)
      this.v_new.set(this.v)
  
      const n = this.y_dim
      const h2 = this.h / 2
  
      for (let i = 1; i < this.x_dim; i++) {
        for (let j = 1; j < this.y_dim; j++) {
          count++
  
          if (this.s[i*n + j] != 0.0 && this.s[(i-1)*n + j] != 0.0 && j < this.y_dim - 1) {
            let x = i * this.h
            let y = j * this.h + h2
            let u = this.u[i*n + j]
            let v = this.v_average(i, j)
            v = this.sample_field(x, y, V_FIELD)
            x = x - u * dt
            y = y - v * dt
            u = this.sample_field(x, y, U_FIELD)
            this.u_new[i*n + j] = u
          }
  
          if (this.s[i*n + j] != 0.0 && this.s[i*n + j-1] != 0.0 && i < this.x_dim - 1) {
            let x = i * this.h + h2
            let y = j * this.h
            let u = this.u_average(i, j)
            u = this.sample_field(x, y, U_FIELD)
            let v = this.v[i*n + j]
            x = x - u * dt
            y = y - v * dt
            v = this.sample_field(x, y, V_FIELD)
            this.v_new[i*n + j] = v
          }
        }
      }
      this.u.set(this.u_new)
      this.v.set(this.v_new)
    }
  
    advect_smoke (dt) {
      this.d_new.set(this.d)
  
      const n = this.y_dim
      const h2 = this.h / 2
  
      for (let i = 1; i < this.x_dim - 1; i++) {
        for (let j = 1; j < this.y_dim - 1; j++) {
          if (this.s[i*n + j] != 0.0) {
            let u = (this.u[i*n + j] + this.u[(i+1)*n + j]) / 2
            let v = (this.v[i*n + j] + this.v[i*n + j+1]) / 2
            let x = i * this.h + h2 - u * dt
            let y = j * this.h + h2 - v * dt
  
            this.d_new[i*n + j] = this.sample_field(x, y, S_FIELD)
          }
        }
      }
      this.d.set(this.d_new)
    }
  
    simulate ({scene}) {
      this.integrate(scene.dt, scene.gravity)
  
      this.p.fill(0.0)
      this.solve_incompressibility(scene.over_relaxation, scene.iterations, scene.dt)
  
      this.extrapolate()
      this.advect_velocity(scene.count, scene.dt)
      this.advect_smoke(scene.dt)
    }
  
    // fill d with decimal color for first iteration
    init (image_data) {
      //this.d.set(image_data)
      let ii
      let fi
      for (let x = 0; x < this.x_dim - 2; x++) {
        for (let y = 0; y < this.y_dim - 2; y++) {
          ii = x * (this.y_dim - 2) + (this.x_dim - 2 - y)
          fi = (x + 1) * (this.y_dim - 0) + (y + 0)
          this.d[fi] = image_data[ii]
        }
      }
    }
  }

  export default Fluid