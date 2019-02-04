export default class Vector3 extends Float32Array {
  public static identity(): Vector3 {
    return new Vector3(
      new Float32Array([
        1, 0, 0,
        0, 1, 0,
        0, 0, 1,
      ])
    );
  }

  public static translation(x: number, y: number): Vector3 {
    return new Vector3(
      new Float32Array([
        1, 0, 0,
        0, 1, 0,
        x, y, 1,
      ])
    );
  }

  public static rotation(radian: number): Vector3 {
    var c = Math.cos(radian);
    var s = Math.sin(radian);
    return new Vector3(
      new Float32Array([
        c,-s, 0,
        s, c, 0,
        0, 0, 1,
      ])
    );
  }

  public static scaling(x: number, y: number): Vector3 {
    return new Vector3(
      new Float32Array([
        x, 0, 0,
        0, y, 0,
        0, 0, 1,
      ])
    );
  }

  public static projection(w: number, h: number): Vector3 {
    return new Vector3(
      new Float32Array([
        2 / w, 0, 0,
        0, -2 / h, 0,
        -1, 1, 1,
      ])
    );
  }

  public multiply(m3: Vector3): Vector3 {
    const out = new Float32Array(9);
    out[0] = m3[0] * this[0] + m3[1] * this[3] + m3[2] * this[6];
    out[1] = m3[0] * this[1] + m3[1] * this[4] + m3[2] * this[7];
    out[2] = m3[0] * this[2] + m3[1] * this[5] + m3[2] * this[8];
    out[3] = m3[3] * this[0] + m3[4] * this[3] + m3[5] * this[6];
    out[4] = m3[3] * this[1] + m3[4] * this[4] + m3[5] * this[7];
    out[5] = m3[3] * this[2] + m3[4] * this[5] + m3[5] * this[8];
    out[6] = m3[6] * this[0] + m3[7] * this[3] + m3[8] * this[6];
    out[7] = m3[6] * this[1] + m3[7] * this[4] + m3[8] * this[7];
    out[8] = m3[6] * this[2] + m3[7] * this[5] + m3[8] * this[8];

    return new Vector3(out);
  } 
}