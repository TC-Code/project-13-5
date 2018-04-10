function convertUptime(time) {
  var t = time / 3600;
  var h = Math.floor(time / 3600);
  var m = Math.floor((t - h) * 60);
  var s = Math.floor(((t - h) * 60 - m) * 60);

  console.log("Uptime:~ ".green + h + "h:" + m + "min:" + s + "sec");
}

exports.print = convertUptime;
