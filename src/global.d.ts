export declare global {
  interface Window {
    isNativeApp: boolean;
    ReactNativeWebView: {
      postMessage: (message: string | null) => void;
    };
  }
}
