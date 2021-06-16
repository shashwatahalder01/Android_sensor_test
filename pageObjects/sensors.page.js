
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














}
module.exports = new SensorPage();