<?php 

    require_once './../classes/Funcoes.class.php';
    require_once './../classes/Cliente.class.php';  
    
    $objFunc = new Funcoes();
    $objCliente = new Cliente();

    if($_POST['op'] == "i"){
        if($objCliente->queryInsert($_POST) == "OK"){
            echo json_encode(["status" => "200","mensagem" => "Cliente Cadastrado com Sucesso!"]);
        }else{
            echo json_encode(["status" => "500","mensagem" => "Ocorreu um erro!"]);
        }
    }
    else if($_POST['op'] == "e"){
        if($objCliente->queryUpdate($_POST) == "OK"){
            echo json_encode(["status" => "200","mensagem" => "Cliente Editado com Sucesso!"]);
        }else{
            echo json_encode(["status" => "500","mensagem" => "Ocorreu um erro!"]);
        }
    }
    else if($_POST['op'] == "d"){
        if($objCliente->queryDelete($_POST['id']) == "OK"){
            echo json_encode(["status" => "200","mensagem" => "Cliente Excluido com Sucesso!"]);
        }else{
            echo json_encode(["status" => "500","mensagem" => "Ocorreu um erro!"]);
        }
    }

    else if($_POST['op'] == "busca"){
        echo getAllClientes($_POST['descricao']);
    }

    function getAllClientes($valor){
        $objClientes = new Cliente();
        $clientes = new Cliente();
        $clientes = $objClientes->querySelecionaBusca($valor);  
        
        print "<pre>"; print_r($clientes);
        // exit;
    
        $arr = array();
        foreach($clientes as $c){

            // print "<pre>"; print_r($c);
            print "<pre>"; print_r($c);
        exit;
            $obj = new stdClass();
            $obj->id = $c['cliente_id'];
            $obj->text = $c['nome'];
    
            $arr[] = $obj;
        }

        // print "<pre>"; print_r($arr);
        // exit;
    
        return json_encode(["results" => $arr]);
    }    