/**
 * G.R.B.C. Império da Pedra — Conteúdo da Landing Page
 * 
 * Este arquivo centraliza todo o conteúdo do site para facilitar manutenção.
 * 
 * ATENÇÃO: Conteúdos marcados como [PROVISÓRIO] devem ser substituídos
 * por informações reais do bloco após verificação.
 */

const SITE_CONTENT = {
    // Informações gerais
    brand: {
        name: 'G.R.B.C. Império da Pedra',
        fullName: 'Grêmio Recreativo Bloco Carnavalesco Império da Pedra',
        shortName: 'Império da Pedra',
        tagline: 'Força, tradição, cultura e carnaval em preto e ouro',
        founded: '10 de março de 2019',
        foundedYear: 2019,
        instagram: 'https://www.instagram.com/bloco_imperio_da_pedra/',
        instagramHandle: '@bloco_imperio_da_pedra',
        whatsapp: 'https://wa.me/', // [PROVISÓRIO] Adicionar número real
    },

    // Galeria de imagens
    // Imagens baixadas do Unsplash (licença livre) e armazenadas localmente
    gallery: [
        {
            src: 'public/assets/images/gallery/carnaval-percussao.jpg',
            alt: 'Percussão de carnaval com tambores',
            caption: 'Bateria do Império'
        },
        {
            src: 'public/assets/images/gallery/carnaval-folioes.jpg',
            alt: 'Foliões celebrando o carnaval',
            caption: 'Alegria do Carnaval'
        },
        {
            src: 'public/assets/images/gallery/carnaval-confetes.jpg',
            alt: 'Confetes e serpentinas de carnaval',
            caption: 'Cores e Festividade'
        },
        {
            src: 'public/assets/images/gallery/carnaval-bloco.jpg',
            alt: 'Bloco de carnaval nas ruas',
            caption: 'Rua é Nossa'
        },
        {
            src: 'public/assets/images/gallery/carnaval-fantasia.jpg',
            alt: 'Fantasias de carnaval brilhantes',
            caption: 'Fantasia e Brilho'
        },
        {
            src: 'public/assets/images/gallery/carnaval-instrumentos.jpg',
            alt: 'Percussão e instrumentos musicais',
            caption: 'Ritmo e Tradição'
        },
        {
            src: 'public/assets/images/gallery/carnaval-danca.jpg',
            alt: 'Pessoas dançando carnaval',
            caption: 'Dança e Movimento'
        },
        {
            src: 'public/assets/images/gallery/carnaval-luzes.jpg',
            alt: 'Celebração com luzes douradas',
            caption: 'Noite de Festa'
        },
        {
            src: 'public/assets/images/gallery/carnaval-festa.jpg',
            alt: 'Festa e celebração brasileira',
            caption: 'Cultura Popular'
        },
        {
            src: 'public/assets/images/gallery/carnaval-bateria.jpg',
            alt: 'Instrumentos de percussão',
            caption: 'Nossa Bateria'
        },
        {
            src: 'public/assets/images/gallery/carnaval-rua.jpg',
            alt: 'Celebração ao ar livre',
            caption: 'Rua e Comunidade'
        },
        {
            src: 'public/assets/images/gallery/carnaval-energia.jpg',
            alt: 'Energia e movimento do carnaval',
            caption: 'Energia do Bloco'
        }
    ],

    // Agenda de eventos
    // [PROVISÓRIO] Substituir por eventos reais do bloco
    events: [
        {
            day: '15',
            month: 'FEV',
            title: 'Ensaio da Bateria',
            description: 'Ensaio aberto para todos os ritmistas e interessados em fazer parte da nossa bateria.',
            location: 'Local a definir', // [PROVISÓRIO]
            time: '19h'
        },
        {
            day: '22',
            month: 'FEV',
            title: 'Bloco de Rua',
            description: 'Nosso tradicional bloco de rua. Venha fantasiado e fazer parte da festa!',
            location: 'Local a definir', // [PROVISÓRIO]
            time: '15h'
        },
        {
            day: '01',
            month: 'MAR',
            title: 'Desfile Oficial',
            description: 'Desfile oficial do G.R.B.C. Império da Pedra. Presença obrigatória de todos os foliões!',
            location: 'Local a definir', // [PROVISÓRIO]
            time: '10h'
        }
    ],

    // Links úteis
    links: {
        instagram: 'https://www.instagram.com/bloco_imperio_da_pedra/',
        whatsapp: 'https://wa.me/', // [PROVISÓRIO] Adicionar número real
    }
};
