const globals = {
  "AutoMount": true,
  "AutoMountOptions": true,
  "Browser": true,
  "ContentScriptAnchoredOptions": true,
  "ContentScriptAppendMode": true,
  "ContentScriptContext": true,
  "ContentScriptInlinePositioningOptions": true,
  "ContentScriptModalPositioningOptions": true,
  "ContentScriptOverlayAlignment": true,
  "ContentScriptOverlayPositioningOptions": true,
  "ContentScriptPositioningOptions": true,
  "ContentScriptUi": true,
  "ContentScriptUiOptions": true,
  "IframeContentScriptUi": true,
  "IframeContentScriptUiOptions": true,
  "InjectScriptOptions": true,
  "IntegratedContentScriptUi": true,
  "IntegratedContentScriptUiOptions": true,
  "InvalidMatchPattern": true,
  "MatchPattern": true,
  "MigrationError": true,
  "ScriptPublicPath": true,
  "ShadowRootContentScriptUi": true,
  "ShadowRootContentScriptUiOptions": true,
  "StopAutoMount": true,
  "StorageArea": true,
  "StorageAreaChanges": true,
  "StorageItemKey": true,
  "WxtAppConfig": true,
  "WxtStorage": true,
  "WxtStorageItem": true,
  "WxtWindowEventMap": true,
  "browser": true,
  "createIframeUi": true,
  "createIntegratedUi": true,
  "createShadowRootUi": true,
  "defineAppConfig": true,
  "defineBackground": true,
  "defineContentScript": true,
  "defineUnlistedScript": true,
  "defineWxtPlugin": true,
  "fakeBrowser": true,
  "injectScript": true,
  "storage": true,
  "useAppConfig": true,
  "useCallback": true,
  "useContext": true,
  "useEffect": true,
  "useMemo": true,
  "useReducer": true,
  "useRef": true,
  "useState": true
}

export default {
  name: "wxt/auto-imports",
  languageOptions: {
    globals,
    /** @type {import('eslint').Linter.SourceType} */
    sourceType: "module",
  },
};
