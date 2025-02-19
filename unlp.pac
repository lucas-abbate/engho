function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (shExpMatch(host, "*.cespi.unlp.edu.ar"))
        return "PROXY  proxy.unlp.edu.ar:8081";

    // by default use no proxy
    return "DIRECT";
}


//function FindProxyForURL(url, host) {
 
// If the IP address of the local machine is in UNLP network, not use proxy
//   if (isInNet(myIpAddress(), "163.10.0.0", "255.255.0.0"))
//        return "DIRECT";
 
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
//    return "PROXY proxy.unlp.edu.ar:8081";
 
//}
