Feature('upload');

Scenario('Uploading File', ({ I }) => {
    I.amOnPage('?controller=contact');
    I.selectOption('#id_contact', '1');
    I.fillField('#email', 'teste@allan.com');
    I.fillField('#id_order', '123456');
    I.fillField('#message', 'Mensagem Mensagem Teste');

    I.attachFile('#fileUpload', 'images/imagem.jpg');
    I.click('#submitMessage');

    pause();
});
