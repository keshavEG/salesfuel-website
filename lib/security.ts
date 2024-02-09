
export async function hashString(text: string) {
  const hash2 = await crypto.subtle
    .digest("SHA-512", Buffer.from(text))
    .then((buf) => {
      return Buffer.from(buf).toString("hex");
    });
  return hash2;
  // // console.log(has)
  // const hash = createHmac("sha256", text).digest("hex");
  // return hash;
}

export async function createCsrfToken(
  pathname: string,
  body: null | undefined | BodyInit
) {
  if (pathname.startsWith("/api2") || pathname.startsWith("/api"))
    pathname = pathname.replace(/(api2|api)/g, "v1");
  body = body || "";
  const hashText = `-${decodeURI(pathname)}-${body}-`;
  const csrfToken = await hashString(hashText);

  console.log(JSON.stringify({ hashText, csrfToken }, null, 2));
  return csrfToken;
}

// const ENC_KEY = process.env["ENCRYPTION_KEY"]!; // # Generate: crypto.randomBytes(32).toString("hex").slice(0, 32);
// const IV = process.env["ENCRYPTION_VI"]!; //Generate: crypto.randomBytes(16).toString("hex").slice(0, 16);
// // AES encryption
// export function aesEncrypt(text: string) {
//   try {
//     let cipher = createCipheriv("aes-256-cbc", ENC_KEY, IV);
//     let encrypted = cipher.update(text, "utf8", "hex");
//     encrypted += cipher.final("hex");
//     return encrypted;
//   } catch (error) {
//     console.log(error);
//     return "";
//   }
// }
