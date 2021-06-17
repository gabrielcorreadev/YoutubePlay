package com.youtubeplay;

import android.content.res.Configuration;

import com.facebook.react.ReactActivity;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  private PictureInPictureModule pictureInPictureModule;

  @Override
  protected String getMainComponentName() {
    return "YouTubePlay";
  }

  @Override
  public void onPictureInPictureModeChanged (boolean isInPictureInPictureMode, Configuration newConfig) {
    WritableMap params = Arguments.createMap(); // add here the data you want to send
    params.putString("inPipMode", isInPictureInPictureMode ? "IS_ACTIVE" : "NO_ACTIVE"); // <- example

    getReactNativeHost().getReactInstanceManager().getCurrentReactContext()
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit("onPictureInPictureModeChanged", params);
  }
}
