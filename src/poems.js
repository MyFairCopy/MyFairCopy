const poems = [
  {
    title: "Confused Life",
    author: "Dev Gautam Kumar",
    content: `
      Don't know
      Who am I?
      I laugh
      when I cry.

      Joys for
      So mile,
      I cry
      when I smile.
      I feel
      the anger
      like a broken
      plane on hangar
      
      The feeling
      of gladness
      changes into
      sadness.
      The success,
      I am yet chasing it.
      The truth
      I am not feeling it.

      Heart is confused
      Life's been
      reduced.
    `,
  },
];
function renderPoems() {
  const poemList = document.getElementById("poem-list");
  poems.forEach((poem) => {
    const poemCard = document.createElement("div");
    poemCard.classList.add("col-md-6", "poem-card");

    // Replace newlines with <br> tags
    const formattedContent = poem.content.trim().replace(/\n/g, '<br>');

    poemCard.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="poem-title">${poem.title}</h5>
          <p class="card-text"><em>by ${poem.author}</em></p>
          <p class="card-text">${formattedContent}</p>
        </div>
      </div>
    `;
    poemList.appendChild(poemCard);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderPoems();
});
