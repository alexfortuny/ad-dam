chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1, 2, 3, 4, 5, 6],
  addRules: [
    {
      "id": 1,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "ads.example.com",
        "resourceTypes": ["script", "image", "sub_frame"]
      }
    },
    {
      "id": 2,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "*://*.doubleclick.net/*",
        "resourceTypes": ["script", "image", "xmlhttprequest"]
      }
    },
    {
      "id": 3,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "*://*.googlesyndication.com/*",
        "resourceTypes": ["script", "stylesheet", "image"]
      }
    },
    {
      "id": 4,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "*://*.adform.net/*",
        "resourceTypes": ["script", "image", "xmlhttprequest"]
      }
    },
    {
      "id": 5,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "*://*.adsafeprotected.com/*",
        "resourceTypes": ["script", "image"]
      }
    },
    {
      "id": 6,
      "priority": 1,
      "action": { "type": "block" },
      "condition": {
        "urlFilter": "*://*.servebom.com/*",
        "resourceTypes": ["script", "image"]
      }
    }
    // Add more rules as needed
  ]
});