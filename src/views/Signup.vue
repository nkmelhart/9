<template>

<div class="container">
	<div style="height: 60px">
			<div v-if="isError">
				<div v-if='isError' class="alert alert-danger show alert-dismissible animate__animated animate__fadeInLeft" role="alert">
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					{{loginError}}</div>
			</div>
		</div>
	<div class="modal-dialog modal-login animate__animated animate__fadeInDown">
		<div class="modal-content">
			<div class="modal-header">
				<div class="avatar text-center">
					<i class="fas fa-user mt-2 fa-3x"></i>
				</div>				
				<h4 class="modal-title">Member Signup</h4>	
                
			</div>
			<div class="modal-body">
				<form action="" @submit.prevent>
					<div class="form-group">
						<input type="text" class="form-control mb-2 ipt" name="email" placeholder="Email" required="required" v-model="email">
						<p class="text-capitalize">{{errorEmail}}</p>		
					</div>
					<div class="form-group">
						<input type="text" class="form-control mb-3 ipt" name="dName" placeholder="Display Name" required="required" v-model="dName">	
					</div> 
					<div class="form-group">
						<input type="password" class="form-control mb-2 ipt" name="password" placeholder="Password" required="required" v-model="password">
						<p class="text-capitalize">{{errorPassword}}</p>	
					</div>       
					<div class="form-group">
						<input type="password" class="form-control mb-2 ipt" name="passwordConfirmation" placeholder="Confirm Password" required="required" v-model="passwordConfirmation">	
						<p>{{passwordConfirmationError}}</p>
					</div>  
					<div class="form-group row px-3">
						<button type="submit" @click="signup" class="btn btn-primary btn-lg btn-block login-btn">Submit</button>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<router-link to='/Login'>Already a member? Click here to sign in!</router-link>
			</div>
		</div>
	</div>
</div>

</template>

<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { isAuthenticated, signUp, signIn, currentUser } from '../helpers/useAuth.js'
	import { useField } from "vee-validate"
	import * as yup from 'yup'
    const router = useRouter()
	const loginError = ref('')
	const isError = ref(false)	

    const signup = async () => {
        try { 
            await signUp(email.value, password.value).then( (result) => {
				return result.user.updateProfile({
                    displayName: dName.value,
                })
            } ).catch( (error) => {
				isError.value = true
                loginError.value = error.message
            })
			if(isError.value === false){
				signIn(email.value, password.value)
            	router.push('/')
				console.log("Got here")
			}
            
        }
        catch(error) {
            console.log(error) 
        }
    }

    //const email = ref('')
    //const password = ref('')

	

	const { value: email, errorMessage: errorEmail, meta: emailMeta } = useField('email', yup.string().required().email())
	const { value: password, errorMessage: errorPassword, meta: passwordMeta } = useField('password', yup.string().required().min(8))

	const passwordConfirmationFn = () => {
		if(password.value === passwordConfirmation.value){
			return true
		}
		return "Password doesn't match"
	}
	const { value: passwordConfirmation, errorMessage: passwordConfirmationError, meta: passwordConfirmationMeta } = useField('passwordConfirmation', passwordConfirmationFn)

	

    const dName = ref('')

</script>

<style scoped>

body {
	font-family: 'Varela Round', sans-serif;
}

input, textarea {

  background-color : #181A1B; 
  border-color: #3C4144;

}
.modal-login {		
	color: #636363;
	width: 350px;
}
.modal-login .modal-content {
	padding: 20px;
	border-radius: 5px;
	border: none;
    background: #181A1B;
}
.modal-login .modal-header {
	border-bottom: none;   
	position: relative;
	justify-content: center;
}
.modal-login h4 {
	text-align: center;
	font-size: 26px;
	margin: 30px 0 -15px;
}
.modal-login .ipt, .modal-login .ipt:focus {
    background-color: #181A1B;
    color: #636363;
}
.modal-login .form-control:focus {
	border-color: #70c5c0;
}
.modal-login .form-control, .modal-login .btn {
	min-height: 40px;
	border-radius: 3px; 
}
.modal-login .close {
	position: absolute;
	top: -5px;
	right: -5px;
}	
.modal-login .modal-footer {
	background: #1E2729;
	text-align: center;
	justify-content: center;
	margin: 0 -20px -20px;
	border-radius: 5px;
	font-size: 13px;
}
.modal-login .modal-footer a {
	color: #999;
}		
.modal-login .avatar {
	position: absolute;
	margin: 0 auto;
	left: 0;
	right: 0;
	top: -70px;
	width: 95px;
	height: 95px;
	border-radius: 50%;
	z-index: 9;
	background: #60c7c1;
	padding: 15px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}
.modal-login .avatar img {
	width: 100%;
}
.modal-login.modal-dialog {
	margin-top: 80px;
}
.modal-login .btn, .modal-login .btn:active {
	color: #fff;
	border-radius: 4px;
	background: #60c7c1 !important;
	text-decoration: none;
	transition: all 0.4s;
	line-height: normal;
	border: none;
}
.modal-login .btn:hover, .modal-login .btn:focus {
	background: #45aba6 !important;
	outline: none;
}
.trigger-btn {
	display: inline-block;
	margin: 100px auto;
}

</style>