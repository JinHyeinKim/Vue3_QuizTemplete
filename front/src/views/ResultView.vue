<template>
<div class="v-row">
<section class="v-col-4 v-container">
<calendar-com/>
</section>
<section class="container quiz-container">
    <div class="questionBox" id="app">
        <div v-if="!answer" style="width: 500px; height: 420px;">
			<DChart/>
		</div>
        
        <p style="height: 80px;">
            상식입니다.
        </p>
        <footer class="questionFooter">
        <nav class="pagination" role="navigation" aria-label="pagination">

											<!-- next button -->
						<a class="button" v-on:click="next();">
                    Next
                  </a>

					</nav>
        </footer>
    </div>
</section>
</div>
</template>

<script>
import DChart from '@/components/basic/DChart.vue'

export default {    
    components: {
        DChart,
		
    },
    methods:{
    next: function() {
         this.$router.push('test')
         }

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
float: right;

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
display: block;

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
display: block;
justify-content: space-between;
}
.button{
padding: 0.5rem 1rem;
border: 3px solid rgba(0,0,0,0.25);
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

