<template>

<!--container-->

<section class="container quiz-container">

	<!--questionBox-->
	<div class="questionBox" id="app">

		<!-- transition -->
		<transition :duration="{ enter: 500, leave: 500 }" enter-active-class="animated" leave-active-class="animated" mode="out-in">
			<!-- <div> -->
			<!--qusetionContainer-->
			<div class="questionContainer" v-if="answer" >

				<header>
					<h1  class="title is-6">VueQuiz</h1>
					<!--progress-->
					<div class="progressContainer">
						
					</div>
					<!--/progress-->
				</header>

				<!-- questionTitle -->
				<h2 class="titleContainer title">{{ quiz.questions[questionIndex].text }}</h2>

				<!-- quizOptions -->
				<div class="optionContainer">
					<div class="option" v-for="(response, index) in quiz.questions[questionIndex].responses" @click="selectOption(index)" :class="{ 'is-selected': userResponses.orderIndex == index}"   :key="index">
						{{ index +1 }}. {{ response.text }}
					</div>
				</div>

				<!--quizFooter: navigation and progress-->
				<footer class="questionFooter">

					<!--pagination-->
					<nav class="pagination" role="navigation" aria-label="pagination">
						<span>보러가기&nbsp;&nbsp;&nbsp;&nbsp;</span>
						
						<a href="http://news.kmib.co.kr/article/view.asp?arcid=0016889776&code=61131611&cp=nv">우크라이나인 93% “우리가 러시아에 승리할 것”</a><br>
						<!-- <p>Ctrl을 누르고 크릭하면 새창에서 열립니다.</p> -->

					</nav>
					<!--/pagination-->

				</footer>
				<!--/quizFooter-->

			</div>
			
				</transition>
			
		
		
		
		
	</div>
	<!--/questionBox-->
	
	
</section>
<!--/container-->

		

</template>

<script>


import data from '@/data/data.json'
// import DisqusCom from '@/components/basic/DisqusCom.vue'




// DisqusCom,
export default {
	components:{
	
	


	},

data: () => ({

    quiz : data,
    questionIndex: 0,
    isActive: false,
	userResponses: [],
	answer : true,
	
  }),
     methods: {
        
      selectOption: function(index) {
        (this.userResponses['orderIndex'] = index)
		
		this.answer = false
        console.log(this.answer);
		this.$router.push('result')
		
      },
          

      } 
}

</script>

<style lang="scss">
$trans_duration: 0.3s;
$primary_color: #3D5AFE;

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

.quiz-container {
font-family: "Open Sans", sans-serif;
font-size: 14px;

height: 100vh;

background: #CFD8DC;

/* mocking native UI */
cursor: default !important; /* remove text selection cursor */
user-select: none; /* remove text selection */
user-drag: none; /* disbale element dragging */

display: flex;
align-items: center;
justify-content: center;
}

.button {
transition: $trans_duration;
}
.title,
.subtitle {
font-family: Montserrat, sans-serif;
font-weight: normal;
}
.animated {
transition: opacity .5s;
 opacity: 0;
}

quiz-container{
margin: 0 0.5rem;
}

.questionBox {

max-width: 500px;
width: 500px;
min-height: 550px;

background: #FAFAFA;
position: relative;
display: flex;

border-radius: 0.5rem;
overflow: hidden;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

header{
background:rgba(0,0,0,0.025);
padding: 1.5rem;
text-align: center;
border-bottom: 1px solid rgba(0,0,0,0.1);

h1{
	font-weight: bold;
	margin-bottom: 1rem !important;
}
	.progressContainer {
width: 60%;
		margin: 0 auto;
		>progress{
			margin:0;
			border-radius: 5rem;
			overflow: hidden;
			border:none;
			
			color:$primary_color;
		&::-moz-progress-bar { background: $primary_color; }
		&::-webkit-progress-value { background: $primary_color; }
		}
		>p{
			margin:0;
			margin-top: 0.5rem;
		}
	}
}
.titleContainer {
	text-align: center;
	margin: 0 auto;
	padding: 1.5rem;

}

.quizForm {
display: block;
white-space: normal;

height: 100%;
width: 100%;

.quizFormContainer {
	height: 100%;
	margin: 15px 18px;

	.field-label {
	text-align: left;
	margin-bottom: 0.5rem;
	}
}
}
.quizCompleted {
width: 100%;
padding: 1rem;
	text-align:center;
	
	> .icon{
		color: #FF5252;
		font-size: 5rem;
		
		.is-active{
			color: #00E676;
		}
	}
}
.questionContainer {
white-space: normal;

height: 550px;
width: 100%;

.optionContainer {
	margin-top: 12px;
	flex-grow: 1;
	.option {
	border-radius: 290486px;
	padding: 9px 18px;
	margin: 0 18px;
	margin-bottom: 12px;
	transition: $trans_duration;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.05);
				color: rgba(0,0,0,0.85);
	border: transparent 1px solid;

	&.is-selected {
		border-color: rgba(rgb(22, 14, 14),0.25);
		background-color: rgb(235, 90, 90);
	}
	&:hover {
		background-color: rgb(235, 90, 90, 0.4);
	}
	&:active {
		transform: scaleX(0.9);
	}
	}
}

.questionFooter {
		background:rgba(0,0,0,0.025);
		border-top: 1px solid rgba(0,0,0,0.1);
	width: 100%;
	align-self: flex-end;

	.pagination {
	//padding: 10px 15px;
	margin: 15px 25px;
	}
}
}
}
.pagination{
display: flex;
justify-content: space-between;
}
.button{
padding: 0.5rem 1rem;
border: 1px solid rgba(0,0,0,0.25);
border-radius: 5rem;
margin: 0 0.25rem;

transition:0.3s;

&:hover{
cursor: pointer;
background: #ECEFF1;
border-color:rgba(0,0,0,0.25);
}
&.is-active{
background: $primary_color;
color: white;
border-color: transparent;

&:hover{
	background: darken($primary_color,10%);
	
}
}
}

@media screen and (min-width: 769px) {
.questionBox {
align-items: center;
justify-content: center;

.questionContainer {
	display: flex;
	flex-direction: column;
}
}
}

@media screen and (max-width: 768px) {
.sidebar {
height: auto !important;
border-radius: 6px 6px 0px 0px;
}
}

</style>

