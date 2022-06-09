<?php
    
    $dbHost = 'Localhost';
    $dbUsername =  'root';
    $dbPassword = '';
    $dbName = 'formulario-contato';

    $conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);
    
    /* Teste de conexão
    if($conexao->connect_errno)
    { 
        echo "Erro";
    }
    else 
    {
        echo "Conexão efetuada com sucesso";
    }
    */
    /* Teste de captura dos valores
    if(isset($_POST['submit']))
    {
        print_r('E-mail: ' . $_POST['email']);
        print_r('<br>');
        print_r('Celular: ' . $_POST['celular']);
        print_r('<br>');
        print_r('Assunto: ' . $_POST['assunto']);
    }
    */
    
?>