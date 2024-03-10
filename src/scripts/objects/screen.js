const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                        <img src="${user.avatarUrl}" alt="Foto Do perfil do usuário"/>
                           <div class="data">
                            <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                            <p>${user.bio ?? 'Não possui nome cadastrado'}</p>
                            <p>👥Seguidores ${user.followers}</p>
                            <p>👥Seguindo ${user.following}</p>
                            </div>
                        </div>`;
    let repositoriesItens = ''
     user.repositories.forEach (repo => repositoriesItens += `<li>
     <a href="${repo.html_url}" target="_blank">${repo.name}
       <div class="info-repo">
         <div class="info">
           <span>🚀 ${repo.forks}</span>
         </div>
         <div class="info">
           <span>🧑‍💻 ${repo.watchers}</span>
         </div>
         <div class="info">
           <span>⭐ ${repo.stargazers_count}</span>
         </div>
         <div class="info">
           <span>🧑‍🏫 ${repo.language ?? 'Sem linguagem'}</span>
         </div>
       </div>
     </a>

  </li>`)                         
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>` 
        }
    },
    renderEvents(user) {
        let eventsUser = "";
    
        user.events.forEach((event) => {
          if (event.payload.commits) {
            event.payload.commits.forEach((commit) => {
              eventsUser += `<li>
                                <p>
                                  <span class="name">${event.repo.name}</span> - ${commit.message}
                                </p>
                               </li>`;
            });
          }
        });
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                                              <h2>Eventos</h2>
                                              <ul>${eventsUser}</ul>
                                           </div>`;
    } else{
        this.userProfile.innerHTML += `<div class="events">
                                        <h2>Eventos</h2>
                                        <ul>
                                          <li>
                                            <h3>Nem um evento recente encontrado😣</h3>  
                                          </li>
                                        </ul>
                                     </div>`;
    }
},
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
};

export { screen };
