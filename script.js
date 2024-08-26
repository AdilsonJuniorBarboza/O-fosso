document.addEventListener('DOMContentLoaded', () => {
    let rankingData = [
        { classe: 'Druída', build: 'Storm Slide', nome: 'Junin', tier: 110, tempo: '6:27', modo: 'SC', video: 'https://youtu.be/yAfxU2OhCCo' },
        { classe: 'Rogue', build: 'Rapid Fire', nome: 'Try', tier: 101, tempo: '10:42', modo: 'SC', video: 'https://youtu.be/n976FxfIj3w?si=gG0a90MB-bdD9FE5' },
        { classe: 'Mago', build: 'Lightning Spear', nome: 'их', tier: 104, tempo: '1:59', modo: 'SC', video: 'https://youtu.be/cXeNZ_dfgWY' },
        { classe: 'Mago', build: 'Laggy Lightning Spear', nome: 'Immanewbie', tier: 135, tempo: '11:45', modo: 'SC', video: 'https://youtube.com/clip/UgkxAknTyviqyYJylVojKtTHt5DgP-ZmPo6u?si=UfJfc3tXk5IGWEn7' },
        { classe: 'Druída', build: 'Doomstorm', nome: 'VasenasGamer', tier: 121, tempo: '7:10', modo: 'SC', video: 'https://www.tiktok.com/@vasenasgamer/video/7405645228574559494?is_from_webapp=1&sender_device=pc&web_id=7395274450344658438' },
    ];
// { classe: '', build: '', nome: '', tier: 0, tempo: '', modo: 'SC', video: '' },
    rankingData.sort((a, b) => {
        if (a.tier !== b.tier) {
            return b.tier - a.tier;
        } else {
            const aTime = parseTime(a.tempo);
            const bTime = parseTime(b.tempo);
            return aTime - bTime;
        }
    });

    const tbody = document.getElementById('ranking-body');

    function populateTable(data) {
        data.forEach((row, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${row.classe}</td>
                <td>${row.build}</td>
                <td>${row.nome}</td>
                <td>${row.tier}</td>
                <td>${row.tempo}</td>
                <td class="${row.modo === 'HC' ? 'modo-hc' : ''}">${row.modo}</td> <!-- Adicionando a classe condicionalmente -->
                <td><a href="${row.video}" target="_blank">Link</a></td>
            `;
            tbody.appendChild(tr);
        });
    }

    populateTable(rankingData);

    window.filterTable = function(classe) {
        if (classe === '') {
            tbody.innerHTML = '';
            populateTable(rankingData);
        } else if (classe === 'HC') {
            const filteredData = rankingData.filter(row => row.modo === 'HC');
            tbody.innerHTML = '';
            populateTable(filteredData);
        } else {
            const filteredData = rankingData.filter(row => row.classe === classe);
            tbody.innerHTML = '';
            populateTable(filteredData);
        }
    }

    function parseTime(timeString) {
        const [minutes, seconds] = timeString.split(':').map(Number);
        return minutes * 60 + seconds;
    }
});


function searchAndScroll() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const rows = document.querySelectorAll('#ranking-body tr');

 
    if (searchInput === '') {
        alert('Digite um nome para pesquisar.');
        return;
    }

    let found = false;

    rows.forEach(row => {
        const nomeCell = row.querySelector('td:nth-child(4)');
        const nome = nomeCell.textContent.trim().toLowerCase();
        if (nome.includes(searchInput)) { 

            row.scrollIntoView({ behavior: 'smooth', block: 'center' });


            const texto = nomeCell.innerHTML;
            const textoDestacado = texto.replace(new RegExp(`(${searchInput})`, 'gi'), '<span style="background-color: yellow">$1</span>');
            nomeCell.innerHTML = textoDestacado;


            setTimeout(() => {
                nomeCell.innerHTML = texto;
            }, 3000); 

            found = true;
        }
    });


    if (!found) {
        alert('Nome não encontrado na tabela.');
    }
}


const searchInput = document.getElementById('searchInput');


searchInput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {

        searchAndScroll();
    }

    window.onload = function() {
        populateTable();
        updateSeasonSelect();
    };
});


