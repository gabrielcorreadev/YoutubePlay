package com.youtubeplay;
import android.app.Activity;
import android.content.Context;
import android.content.pm.FeatureInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.widget.Toast;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.app.PictureInPictureParams;
import android.os.Build;
import android.util.Rational;

public class PictureInPictureModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

    private final ReactApplicationContext reactContext;
    private static final int ASPECT_WIDTH = 3;
    private static final int ASPECT_HEIGHT = 3;
    private boolean isPipSupported = false;
    private boolean isCustomAspectRatioSupported = false;
    private boolean isPipListenerEnabled = false;
    public boolean inPipMode = false;
    private Rational aspectRatio;


    public PictureInPictureModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        reactContext.addLifecycleEventListener(this);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            isPipSupported = true;
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            isCustomAspectRatioSupported = true;
            aspectRatio = new Rational(ASPECT_WIDTH, ASPECT_HEIGHT);
        }
    }

    @Override
    public String getName() {
        return "PictureInPicture";
    }

    @ReactMethod
    public void showAlertToast(String text) {
        Context context = getReactApplicationContext();
        Toast.makeText(context, text, Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void start() {
        final Activity activity = getCurrentActivity();
        if (isPipSupported) {
            if (isCustomAspectRatioSupported) {
                PictureInPictureParams params = new PictureInPictureParams.Builder()
                        .setAspectRatio(this.aspectRatio).build();
                getCurrentActivity().enterPictureInPictureMode(params);
            }} else {
            Context context = getReactApplicationContext();
            String text = "Your device is not supported";
            Toast.makeText(context, text, Toast.LENGTH_LONG).show();
        }

    }

    @ReactMethod
    public void configureAspectRatio(Integer width, Integer height) {
        aspectRatio = new Rational(width, height);
    }

    @ReactMethod
    public void enableAutoPipSwitch() {
        isPipListenerEnabled = true;
    }

    @ReactMethod
    public void disableAutoPipSwitch() {
        isPipListenerEnabled = false;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String activeModePip(){
        return "awesome string";
    }

    public boolean hasSystemFeature (String featureName){
//        FeatureInfo.getSystemAvailableFeatures();
        return true;
    }

    @Override
    public void onHostResume() {

    }
    

    @Override
    public void onHostPause() {
        if (isPipSupported && isPipListenerEnabled) {
            start();
        }
    }

    @Override
    public void onHostDestroy() {

    }
}
