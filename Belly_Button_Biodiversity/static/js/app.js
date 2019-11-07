function buildMetadata(sample) {
  d3.json(`/metadata/${sample}`).then((data) => {
   
init();
