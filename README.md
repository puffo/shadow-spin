# Shadow Spin

When spinning or cycling, a user might want to follow an audio track's "shadow" accompaniment.
The "shadow" is a path or set of instructions for the intensity and style of exercise to follow along to at the gym or in their home.


#### Instructions

1. Install node in your terminal

2. Run:
```
$ npm install
$ npm start
```

3. Visit [http://localhost:3000/](http://localhost:3000/) in your web browser

---


### Project Scope
The track playback screen allows the user to follow along to a "shadow track" by showing the following UI:

#### Track effort / difficulty visualiser
  • A track's difficulty instructions (shown by a coloured bar graph)
  • A small indicator of the current difficulty section in the graph
  • A text instruction for the current section

#### Track playback controls
  • A timer showing the time since the start of a track
  • The title of the audio track
  • A play/pause control

#### BPM indicators
  • A numerical BPM indicator
  • A visual cue sync (perhaps an icon / changing colours at the frequency of the beat)