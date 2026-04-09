const fs = require('fs');

try {
    let html = fs.readFileSync('ever.html', 'utf-8');

    // Title & Meta
    html = html.replace(/<title>.*?<\/title>/gi, '<title>Lu Make Up | Beleza em Cada Detalhe</title>');
    html = html.replace(/Ever Beauty In Every Detail/gi, 'Lu Make Up | Beleza em Cada Detalhe');
    
    // Naming
    html = html.replace(/\bEverlash\b/gi, 'Lu Make Up');
    html = html.replace(/>EVER</g, '>LUMAKEUP<');
    html = html.replace(/>Ever</g, '>Lu Make Up<');
    html = html.replace(/>EVER /g, '>LU MAKE UP ');
    html = html.replace(/ ever /gi, ' lu make up ');

    // Specific sentences from the reference
    html = html.replace(/Every detail is designed with care to enhance your natural beauty without losing authenticity./gi, 'Cada detalhe é desenhado com cuidado para realçar a sua beleza natural sem perder a autenticidade.');
    html = html.replace(/Lashes that sit effortlessly.*?long as you need./gi, 'Tratamentos que se assentam sem esforço, projetados para valorizar o formato do seu rosto com precisão.');
    html = html.replace(/Treatment/g, 'Tratamentos');
    html = html.replace(/Endless Possibility With/gi, 'Possibilidades Infinitas com');
    html = html.replace(/Personalised\s*Services/gi, 'Serviços Personalizados');
    html = html.replace(/Quiet luxury for your body./gi, 'Luxo discreto e elegante.');
    
    // Save over the main index.html
    fs.writeFileSync('index.html', html);
    
    // Clear out our old style.css and script.js since ever uses CDN links
    fs.writeFileSync('style.css', '/* Overridden by Ever.co.id CDN CSS */');
    fs.writeFileSync('script.js', '// Overridden by Ever.co.id CDN JS');
    
    console.log('Successfully ripped ever.co.id and applied Lu Make Up copy.');
} catch (e) {
    console.error(e);
}
