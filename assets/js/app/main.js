var context, bufferLoader, bufferList;
window.onload = init;
var everythingready = !1,
  isplaying = !1;
function init() {
  (window.AudioContext = window.AudioContext || window.webkitAudioContext),
    (context = new AudioContext()),
    (bufferLoader = new BufferLoader(
      context,
      [
        "./audio/loop/ROOMTONE.mp3",
        "./audio/loop/COFFEE.mp3",
        "./audio/loop/PEOPLE.mp3",
        "./audio/loop/PRINTER.mp3",
        "./audio/loop/OPEN_WINDOW.mp3",
        "./audio/loop/TELEPHONE.mp3",
        "./audio/loop/THE_OFFICE_DOG.mp3",
        "./audio/loop/KEYBOARD.mp3",
        "./audio/loop/RAIN_ON_WINDOW.mp3",
        "./audio/loop/FERNANDA.ogg",
      ],
      finishedLoading
    )).load();
}
function finishedLoading(t) {
  $("#loading").hide(),
    $("#playbutton").show(),
    (everythingready = !0),
    (bufferList = t);
}
function playz() {
  isplaying
    ? ($("#playbutton").addClass("mute"), (isplaying = !1))
    : ($("#playbutton").removeClass("mute"), (isplaying = !0)),
    audio1.toggle(),
    audio2.toggle(),
    audio3.toggle(),
    audio4.toggle(),
    audio5.toggle(),
    audio6.toggle(),
    audio7.toggle(),
    audio8.toggle(),
    audio9.toggle();
    audio10.toggle();
}
var audio1 = {
    playing: !1,
    gainNode: null,
    play: function () {
      context.createGain || (context.createGain = context.createGainNode),
        (this.gainNode = context.createGain());
      var t = context.createBufferSource();
      (t.buffer = bufferList[0]),
        t.connect(this.gainNode),
        this.gainNode.connect(context.destination),
        (this.gainNode.gain.value = 0.5),
        (t.loop = !0),
        t.start || (t.start = t.noteOn),
        t.start(0),
        (this.source = t);
    },
    changeVolume: function (t) {
      var e = t.value;
      parseInt(t.value), parseInt(t.max);
      this.gainNode.gain.value = e;
    },
    stop: function () {
      this.source.stop || (this.source.stop = source.noteOff),
        this.source.stop(0);
    },
    toggle: function () {
      this.playing ? this.stop() : this.play(), (this.playing = !this.playing);
    },
  },
  audio2 = {
    playing: !1,
    gainNode: null,
    play: function () {
      context.createGain || (context.createGain = context.createGainNode),
        (this.gainNode = context.createGain());
      var t = context.createBufferSource();
      (t.buffer = bufferList[1]),
        t.connect(this.gainNode),
        this.gainNode.connect(context.destination),
        (this.gainNode.gain.value = 0.5),
        (t.loop = !0),
        t.start || (t.start = t.noteOn),
        t.start(0),
        (this.source = t);
    },
    changeVolume: function (t) {
      var e = t.value;
      parseInt(t.value), parseInt(t.max);
      this.gainNode.gain.value = e;
    },
    stop: function () {
      this.source.stop || (this.source.stop = source.noteOff),
        this.source.stop(0);
    },
    toggle: function () {
      this.playing ? this.stop() : this.play(), (this.playing = !this.playing);
    },
  },
  audio3 = {
    playing: !1,
    gainNode: null,
    play: function () {
      context.createGain || (context.createGain = context.createGainNode),
        (this.gainNode = context.createGain());
      var t = context.createBufferSource();
      (t.buffer = bufferList[2]),
        t.connect(this.gainNode),
        this.gainNode.connect(context.destination),
        (this.gainNode.gain.value = 0.5),
        (t.loop = !0),
        t.start || (t.start = t.noteOn),
        t.start(0),
        (this.source = t);
    },
    changeVolume: function (t) {
      var e = t.value;
      parseInt(t.value), parseInt(t.max);
      this.gainNode.gain.value = e;
    },
    stop: function () {
      this.source.stop || (this.source.stop = source.noteOff),
        this.source.stop(0);
    },
    toggle: function () {
      this.playing ? this.stop() : this.play(), (this.playing = !this.playing);
    },
  },
  audio4 = {
    playing: !1,
    gainNode: null,
    play: function () {
      context.createGain || (context.createGain = context.createGainNode),
        (this.gainNode = context.createGain());
      var t = context.createBufferSource();
      (t.buffer = bufferList[3]),
        t.connect(this.gainNode),
        this.gainNode.connect(context.destination),
        (this.gainNode.gain.value = 0.3),
        (t.loop = !0),
        t.start || (t.start = t.noteOn),
        t.start(0),
        (this.source = t);
    },
    changeVolume: function (t) {
      var e = t.value;
      parseInt(t.value), parseInt(t.max);
      this.gainNode.gain.value = e;
    },
    stop: function () {
      this.source.stop || (this.source.stop = source.noteOff),
        this.source.stop(0);
    },
    toggle: function () {
      this.playing ? this.stop() : this.play(), (this.playing = !this.playing);
    },
  },
  audio5 = {
    playing: !1,
    gainNode: null,
    play: function () {
      context.createGain || (context.createGain = context.createGainNode),
        (this.gainNode = context.createGain());
      var t = context.createBufferSource();
      (t.buffer = bufferList[4]),
        t.connect(this.gainNode),
        this.gainNode.connect(context.destination),
        (this.gainNode.gain.value = 0.4),
        (t.loop = !0),
        t.start || (t.start = t.noteOn),
        t.start(0),
        (this.source = t);
    },
    changeVolume: function (t) {
      var e = t.value;
      parseInt(t.value), parseInt(t.max);
      this.gainNode.gain.value = e;
    },
    stop: function () {
      this.source.stop || (this.source.stop = source.noteOff),
        this.source.stop(0);
    },
    toggle: function () {
      this.playing ? this.stop() : this.play(), (this.playing = !this.playing);
    },
  },
  audio6 = {
    playing: !1,
    gainNode: null,
    play: function () {
      context.createGain || (context.createGain = context.createGainNode),
        (this.gainNode = context.createGain());
      var t = context.createBufferSource();
      (t.buffer = bufferList[5]),
        t.connect(this.gainNode),
        this.gainNode.connect(context.destination),
        (this.gainNode.gain.value = 0.5),
        (t.loop = !0),
        t.start || (t.start = t.noteOn),
        t.start(0),
        (this.source = t);
    },
    changeVolume: function (t) {
      var e = t.value;
      parseInt(t.value), parseInt(t.max);
      this.gainNode.gain.value = e;
    },
    stop: function () {
      this.source.stop || (this.source.stop = source.noteOff),
        this.source.stop(0);
    },
    toggle: function () {
      this.playing ? this.stop() : this.play(), (this.playing = !this.playing);
    },
  },
  audio7 = {
    playing: !1,
    gainNode: null,
    play: function () {
      context.createGain || (context.createGain = context.createGainNode),
        (this.gainNode = context.createGain());
      var t = context.createBufferSource();
      (t.buffer = bufferList[6]),
        t.connect(this.gainNode),
        this.gainNode.connect(context.destination),
        (this.gainNode.gain.value = 0.02),
        (t.loop = !0),
        t.start || (t.start = t.noteOn),
        t.start(0),
        (this.source = t);
    },
    changeVolume: function (t) {
      var e = t.value;
      parseInt(t.value), parseInt(t.max);
      this.gainNode.gain.value = e;
    },
    stop: function () {
      this.source.stop || (this.source.stop = source.noteOff),
        this.source.stop(0);
    },
    toggle: function () {
      this.playing ? this.stop() : this.play(), (this.playing = !this.playing);
    },
  },
  audio8 = {
    playing: !1,
    gainNode: null,
    play: function () {
      context.createGain || (context.createGain = context.createGainNode),
        (this.gainNode = context.createGain());
      var t = context.createBufferSource();
      (t.buffer = bufferList[7]),
        t.connect(this.gainNode),
        this.gainNode.connect(context.destination),
        (this.gainNode.gain.value = 0.5),
        (t.loop = !0),
        t.start || (t.start = t.noteOn),
        t.start(0),
        (this.source = t);
    },
    changeVolume: function (t) {
      var e = t.value;
      parseInt(t.value), parseInt(t.max);
      this.gainNode.gain.value = e;
    },
    stop: function () {
      this.source.stop || (this.source.stop = source.noteOff),
        this.source.stop(0);
    },
    toggle: function () {
      this.playing ? this.stop() : this.play(), (this.playing = !this.playing);
    },
  },
  audio9 = {
    playing: !1,
    gainNode: null,
    play: function () {
      context.createGain || (context.createGain = context.createGainNode),
        (this.gainNode = context.createGain());
      var t = context.createBufferSource();
      (t.buffer = bufferList[8]),
        t.connect(this.gainNode),
        this.gainNode.connect(context.destination),
        (this.gainNode.gain.value = 0.2),
        (t.loop = !0),
        t.start || (t.start = t.noteOn),
        t.start(0),
        (this.source = t);
    },
    changeVolume: function (t) {
      var e = t.value;
      parseInt(t.value), parseInt(t.max);
      this.gainNode.gain.value = e;
    },
    stop: function () {
      this.source.stop || (this.source.stop = source.noteOff),
        this.source.stop(0);
    },
    toggle: function () {
      this.playing ? this.stop() : this.play(), (this.playing = !this.playing);
    },
  },
  audio10 = {
    playing: !1,
    gainNode: null,
    play: function () {
      context.createGain || (context.createGain = context.createGainNode),
        (this.gainNode = context.createGain());
      var t = context.createBufferSource();
      (t.buffer = bufferList[9]),
        t.connect(this.gainNode),
        this.gainNode.connect(context.destination),
        (this.gainNode.gain.value = 0.2),
        (t.loop = !0),
        t.start || (t.start = t.noteOn),
        t.start(0),
        (this.source = t);
    },
    changeVolume: function (t) {
      var e = t.value;
      parseInt(t.value), parseInt(t.max);
      this.gainNode.gain.value = e;
    },
    stop: function () {
      this.source.stop || (this.source.stop = source.noteOff),
        this.source.stop(0);
    },
    toggle: function () {
      this.playing ? this.stop() : this.play(), (this.playing = !this.playing);
    },
  }
  ;
