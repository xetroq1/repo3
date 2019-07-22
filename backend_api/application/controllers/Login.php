<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends MX_Controller {

  public function __construct(){
      parent::__construct();
      header("Access-Control-Allow-Origin: *");
      header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
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
        $user = array(
            'username'  => $this->input->post('username'),
            'password'   => $this->input->post('password'),
        );
        $users = array(
            'username'  => 'user',
            'password'   => 'password',
        );

        $query = $this->MY_Model->select()
        ->from('users')
        ->where($user)
        ->num_rows();

        $query1 = $this->MY_Model->select()
        ->from('users')
        ->where($user)
        ->result();

        if ($query > 0){
            $response = array(
           'response_status' => true,
           'message' => 'Login successfully',
           'return'  => $query1
       );
        }else{
            $response = array(
           'response_status' => false,
           'message' => 'Error Credentials',
           'return'  => 'Error'
            );
        }

        echo json_encode($response);
	}

    public function register(){
        $this->validate_fields();
        $this->check_valid_email();
        $this->check_user();

        $userData      =  array(
            'course_name' => $this->input->post('Coursename'),
            'description' => $this->input->post('Coursedesc'),
            'date_added' => date('Y-m-d'),
            'date_modified' => '',
            'added_by' => 'Dummy',
            'course_status'   => 1,
        );

        $id = $this->MY_Model->insert('tbl_course',$userData);
             $response = array(
            'response_status' => true,
            'message' => 'User added successfully',
            'return'  => ''
             );

        echo json_encode($response);
    }

}
