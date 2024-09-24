function homePageFunction() {
    const itens = document.getElementsByClassName('featured-movie');

    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close-modal');

    const h3 = document.getElementById('h3-modal');
    const yearAndTime = document.getElementById('year-and-time');
    const description = document.getElementById('description')

    const iframe = document.createElement('div');

    for (const item of itens) {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            modal.style.transition = '0.5s'

            const idAttribute = item.getAttribute('id');

            switch (idAttribute) {
                case 'exorcismos-e-demonios':
                    iframe.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SJzPTSvqKrQ?si=6ricul0G6hl7tDGV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

                    h3.innerText = 'Exorcismos e Demônios';
                    yearAndTime.innerText = '2023 | 1h 30min';
                    description.innerText = '"Exorcismos e Demônios" é baseado na história real de um padre sentenciado à prisão após a morte de uma freira em que praticou um exorcismo. Uma jornalista investigativa se esforça para desvendar...';
                    break;
                case 'a-semente-do-mal':
                    iframe.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/umn8JTkFBWE?si=IxIuqMEvRUea6mx3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

                    h3.innerText = 'A Semente do Mal';
                    yearAndTime.innerText = '2024 | 1h 31min';
                    description.innerText = '"Ao lado de sua namorada (Brigette Lundy-Paine), Edward (Carloto Cotta) decide desvendar os segredos a respeito de sua família biológica, com quem nunca teve contato. No entanto, o que parecia ser uma jornada de descobertas pelo Norte de Portugal rapidamente se transforma em um pesadelo...';
                    break;
                case 'a-bruxa-dos-mortos':
                    iframe.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/PrkjXmg5bw8?si=c2WIWh-tCpdmT5BE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

                    h3.innerText = 'A Bruxa dos Mortos - Baghead';
                    yearAndTime.innerText = '2024 | 1h 35min';
                    description.innerText = '"Após o falecimento de seu pai, Iris (Freya Allan) herda um antigo bar e se depara com um segredo obscuro: o local abriga uma entidade capaz de incorporar os mortos. Tentada a explorar os poderes da criatura...';
                    break;
                case 'fale-comigo':
                    iframe.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/zIt5jSNPxNI?si=Do-PAUCLb8ykNqPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

                    h3.innerText = 'Fale Comigo';
                    yearAndTime.innerText = '2023 | 1h 35min';
                    description.innerText = '"Fale Comigo" é um thriller intenso que mergulha no mundo sobrenatural. A trama gira em torno de um grupo de amigos que, após descobrir uma maneira de se comunicar com espíritos, enfrentam consequências aterrorizantes...';
                    break;
                case 'o-exorcismo':
                    iframe.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Rhk_Ljj6pDE?si=iQBOJMSSD7IoWwFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

                    h3.innerText = 'O Exorcismo';
                    yearAndTime.innerText = '2023 | 1h 40min';
                    description.innerText = '"O Exorcismo" narra a aterrorizante história de um padre que enfrenta forças malignas enquanto tenta salvar uma jovem possuída. Baseado em eventos reais, o filme explora os limites entre o bem e o mal, desafiando a fé e a razão em uma luta desesperada contra o sobrenatural...';
                    break;
                case 'abigail':
                    iframe.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/4EEDJFCKryE?si=m26cS9v8iG8_zfHq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

                    h3.innerText = 'Abigail';
                    yearAndTime.innerText = '2023 | 1h 45min';
                    description.innerText = '"Abigail" conta a história de uma jovem com poderes sobrenaturais que vive em uma cidade onde a magia é proibida. Quando descobre a verdade sobre sua origem, ela embarca em uma jornada perigosa para salvar seu pai e libertar seu povo, enfrentando forças sombrias que ameaçam destruir tudo o que ela ama...';
                    break;
                default:
                    console.log('Algo deu errado...');
                    break;
            }
            
            modal.insertBefore(iframe, modal.firstChild);
        });
    } 

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';

        modal.removeChild(iframe);
    })
}

homePageFunction();