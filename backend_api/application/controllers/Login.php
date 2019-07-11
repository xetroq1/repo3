<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MX_Controller {

    public function __construct(){
        parent::__construct();
    }

	public function index(){
        echo 'test';
	}

	public function register(){
          $this->load_page('register');
	}

	public function process_register(){
		$username = $this->input->post("username");
		$password = $this->input->post("password");
		$email = $this->input->post("email");
		$this->form_validation->set_rules('username','Username','required');
		$this->form_validation->set_rules('email','Email','required');
		$this->form_validation->set_rules('password','Password','required');
		$this->form_validation->set_rules('confirm_password','Confirm Password','required');
		if($this->form_validation->run() == false){
			$this->load_page('register');
		}else{

		}
	}

	public function login(){
        
        $this->My_Model->getRows();
	}

}
