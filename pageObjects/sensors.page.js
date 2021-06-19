
const multiremote = require('webdriverio');

class SensorPage {


// get no_internet_popup() { return $('//androidx.appcompat.widget.LinearLayoutCompat[@resource-id="bd.com.evaly.evalyshop:id/parentPanel"]'); }
// get ok() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }
// // get retry() { return $('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.Button[@resource-id="bd.com.evaly.evalyshop:id/button"]'); }
// get retry() { return $('//android.widget.Button[@resource-id="bd.com.evaly.evalyshop:id/button"]'); }
// get menu() { return $('//android.widget.ImageView[@resource-id="bd.com.evaly.evalyshop:id/menuBtn"]'); }
// get home() { return $('//android.widget.FrameLayout[@resource-id="bd.com.evaly.evalyshop:id/homeFragment"]'); }




get connected() { return $('//android.widget.TextView[@resource-id="android:id/summary"]'); }
get disconnected() { return $('//android.widget.TextView[@resource-id="com.android.settings:id/switch_text"]'); }
get switch_wifi() { return $('//android.widget.TextView[@resource-id="com.android.settings:id/switch_widget"]'); }



get blutooth_off() { return $('//android.widget.TextView[@resource-id="com.android.settings:id/switch_text"]'); }
get blutooth_on() { return $('//android.widget.TextView[@resource-id="com.android.settings:id/switch_text"]'); }
get blutooth_switch() { return $('//android.widget.TextView[@resource-id="com.android.settings:id/switch_widget"]'); }


get conns() { return $('//android.widget.LinearLayout[@resource-id="com.android.settings:id/tile_view"]'); }
get conn_() { return $('//android.widget.TextView[@resource-id="android:id/title"]'); }
get blue() { return $('//android.widget.Switch[@content-desc="Bluetooth"]'); }
get B_status() { return $('//android.widget.TextView[2][@resource-id="android:id/summary"]'); }



get Location_status_off() { return $('//android.widget.LinearLayout[@content-desc=" Off"]/android.widget.Switch"]'); }
get Location_status_on() { return $('//android.widget.LinearLayout[@content-desc=" On"]/android.widget.Switch"]'); }
get Location_status() { return $('//android.widget.LinearLayout[@resource-id="com.android.settings:id/switch_text"]'); }




// pixel



get device_connected() { return $('//android.widget.TextView[1][@resource-id="android:id/title"]'); }
get device_disconnected() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.TextView'); }
get switch_wifi() { return $('//android.widget.Switch[@resource-id="com.android.settings:id/switch_widget"]'); }




// get location() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[7]/android.widget.RelativeLayout/android.widget.TextView[1]'); }
// get location() { return $('//android.widget.TextView[@text="Battery"]'); }
// get location() { return $('//android.widget.TextView[@text="Location"]'); }
get location_switch() { return $('//android.widget.Switch[@resource-id="com.android.settings:id/switch_widget"]'); }
// location_s = '//android.widget.TextView[@text="Location"]'
// get location_off() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[5]/android.widget.RelativeLayout/android.widget.TextView[2]'); }



get connected_device() { return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.TextView[1]'); }
get connected_preference() { return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.TextView[1]'); }
get blue() { return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.TextView'); }
get blue_sw() { return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Switch'); }
get blue_Device() { return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.TextView[1]'); }












get wifi_() { return $('//android.widget.Switch[@content-desc="Wi-Fi,AndroidWifi"]'); }
get blue_() { return $('//android.widget.Switch[@content-desc="Bluetooth."]'); }
get Mdata_() { return $('//android.widget.Switch[@content-desc="Mobile data"]'); }
get Airplane_() { return $('//android.widget.Switch[@content-desc="Airplane mode"]'); }
get location_() { return $('//android.widget.Switch[@content-desc="Location"]'); }










}
module.exports = new SensorPage();