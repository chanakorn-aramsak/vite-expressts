import { IBackendFramework } from "../interface/IBackendFramework";

export class Monic implements IBackendFramework {
  GET(url: string): string {
    if (url !== undefined && url.startsWith("http://")) {
      let message = `Reading ${url}...`;
      if (url.startsWith("https://")) {
        message += " This website is so secure!";
      }
      return message;
    }
    return "";
  }

  POST(url: string, data: string): string {
    if (url !== undefined && url.startsWith("http://")) {
      let message = `Posting ${data} to ${url}...`;
      if (url.startsWith("https://")) {
        message += " This website is so secure!";
      }
      if (data.startsWith("{") && data.endsWith("}")) {
        message += " JSON is coming!";
      }
      return message;
    }
    return "";
  }
}
