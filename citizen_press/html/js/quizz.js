"use strict";
function Quizz(){
    this.boutonPage = $('.boutonQuestionSuivante');
    this.containerPage = $('#quizz');
    this.currentQuestion = 1;
    this.initStructure();
    this.initListener();
}
Quizz.prototype = {
    initStructure: function(){
        this.containerPhotoReponse = new ImageResponsive($(".containerPhotoReponse img"));
        this.show(1);
    },
    initListener: function() {
        var self = this;
        this.boutonPage.click(function() {
			var indexChecked = self.getIndexCheckedValue();
			if (indexChecked !== undefined) {
				self.nextQuestion();
			} else {
				alert("Veuillez cocher au moins une réponse");
			}
        });
    },
    nextQuestion: function() {
        this.show(this.currentQuestion+1);
    },
    getContainerQuestionByIndex: function(index) {
        var resultat;
        $('.contentQuestion').each(function(currentIndex) {
            if (currentIndex == index-1) {
                resultat = $(this);
            }
        });
        return resultat;
    },
    getIndexCheckedValue: function(radio_name){
		var resultat;
		var self = this;
        $('.groupeQuestion'+this.currentQuestion).each(function(currentIndex) {
			if($(this).prop('checked')) {
				resultat = currentIndex+1;
			}
		});
		return resultat;
    },
    verifReponse: function() {
        this.listeQuestions[this.currentQuestion].submit(this.getIndexCheckedValue());
    },
    show : function(index) {
        var oldContainer = this.getContainerQuestionByIndex(this.currentQuestion);
        oldContainer.removeClass("questionVisible");
        
        var newContainer = this.getContainerQuestionByIndex(index);
        newContainer.addClass("questionVisible");
        
		this.containerPhotoReponse.update();
        this.currentQuestion = index;
    },
};