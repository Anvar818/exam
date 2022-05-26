// {
//     id: 1,
//     num: '001',
//     name: 'Bulbasaur',
//     img: 'http://www.serebii.net/pokemongo/pokemon/001.png',
//     type: ['Grass', 'Poison'],
//     height: '0.71 m',
//     weight: '6.9 kg',
//     candy: 'Bulbasaur Candy',
//     candy_count: 25,
//     egg: '2 km',
//     spawn_chance: 0.69,
//     avg_spawns: 69,
//     spawn_time: '20:00',
//     multipliers: [1.58],
//     weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
//     next_evolution: [
//         {
//             num: '000',
//             name: 'Ivysaur',
//         },
//         {
//             num: '002',
//             name: 'Venusaur',
//         },
//     ],
// },


{/* <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div> */}


          var pokemonsEL = document.querySelector(".general__div")

          for (var i = 0; i < pokemons.length; i++ ){
          
              var pokemonContainer = document.createElement("div")
              pokemonContainer.className ="card"
          
          
              var imgEL = document.createElement("img")
              imgEL.className = 'card-img'
              imgEL.style.width = '157px',
              imgEL.style.height = '157px',
              imgEL.src = pokemons[i].img
              pokemonContainer.appendChild(imgEL)
          
              // var divWirf = document.createElement("div")
              // pokemonContainer.appendChild(divWirf)
          
              var nameEL = document.createElement("h2")
              nameEL.className = 'card-title'
              nameEL.textContent = pokemons[i].name
              pokemonContainer.appendChild(nameEL)
            
              var typeEL = document.createElement("p")
              typeEL.className = 'card-type'
              typeEL.textContent = pokemons[i].type
              pokemonContainer.appendChild(typeEL)
          
          
          
              var heightEL = document.createElement("p")
              heightEL.className = 'card-height'
              heightEL.textContent = pokemons[i].height
              pokemonContainer.appendChild(heightEL)
          
              var weightEL = document.createElement("p")
              weightEL.className = 'card-weight'
              weightEL.textContent = pokemons[i].weight
              pokemonContainer.appendChild(weightEL)
          
              
          
            
          
          
              pokemonsEL.appendChild(pokemonContainer)
          
          
          }
