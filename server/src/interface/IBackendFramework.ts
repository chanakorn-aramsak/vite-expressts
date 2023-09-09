export interface IBackendFramework {
    GET(url: string): string;
    POST(url: string, data: string): string;
  }
  