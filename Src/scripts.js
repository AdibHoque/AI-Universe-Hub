load();
const container = document.getElementById("container")

async function load() {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools")
  const body = await res.json()
  body.data.tools.forEach(t => {
    //   {
    //     "id": "01",
    //     "name": "ChatGPT",
    //     "description": "ChatGPT is a large language model developed by OpenAI that can generate human-like responses in a conversation.",
    //     "image": "https://img.olhardigital.com.br/wp-content/uploads/2023/01/chatgpt_assistente.jpg",
    //     "published_in": "11/1/2022",
    //     "features": [
    //         "Natural language processing",
    //         "Contextual understanding",
    //         "Text generation"
    //     ],
    //     "links": [
    //         {
    //             "name": "Homepage",
    //             "url": "https://openai.com/chat-gpt/"
    //         },
    //         {
    //             "name": "GitHub",
    //             "url": "https://github.com/openai/gpt-2"
    //         }
    //     ]
    // }
    const newDiv = document.createElement('div')
    newDiv.id = t.id;
    let features = ""
    t.features.forEach(f => {
      features += `${t.features.indexOf(f) + 1}. ${f}</br>`
    })
    newDiv.innerHTML = `<div class="card h-30 card-compact bg-base-100 shadow-xl">
    <figure><img class="min-h-[40vh]" src="${t.image}" alt="AI" /></figure>
    <div class="card-body">
      <h2 class="card-title">Features</h2>
      <p>${features}</p>
      <div class="w-full bg-[#11111133] h-[1px] self-center my-2"> </div>
      <div class="flex justify-between">
      <div>
      <h2 class="card-title">${t.name}</h2>
      <p><i class="fa-regular fa-calendar-range"></i>  ${t.published_in}</p>
      </div>
      
      <div class="card-actions justify-end">
        <button class="btn btn-circle text-[#EB5757]"><i class="fa-regular fa-arrow-right"></i></button>
      </div></div>
      
    </div>
  </div>`
    container.appendChild(newDiv)
    console.log(t)
  });
}