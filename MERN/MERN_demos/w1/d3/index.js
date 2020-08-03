const title = React.createElement(
  "h1",
  {
    id: "title",
    className: "class1 class2",
  },
  "Here comes dat World, o shucks, Hello!"
);

const memeImgRef = React.createElement("img", {
  src:
    "https://cdn.vox-cdn.com/thumbor/VLZ4O_6CzK-WMX9jLXyL0NCaSLY=/0x0:863x853/1400x1400/filters:focal(431x165:569x303):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49710589/dat_20boi.0.jpg",
  width: 500,
  onClick: (event) => {
    console.log("waddup");
    console.log(event);
  },
});

const div = React.createElement("div", {}, [title, memeImgRef]);

ReactDOM.render(div, document.getElementById("root"));
