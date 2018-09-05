class TennisGame{
    constructor(){
        this.playerOneName = "Aaron"
        this.playerTwoName = "Avi"
        this.playerOneScore = 0
        this.playerTwoScore = 0
    }
    playerOneScores(){
        this.playerOneScore++
    }
    playerTwoScores(){
        this.playerTwoScore++
    }
    isDeuce(){
        if(this.playerOneScore>=3 && this.playerOneScore == this.playerTwoScore){
            return true
        }
        return false
    }
    playerWithHighestScore(){
        if(this.playerOneScore > this.playerTwoScore){
            return this.playerOneName
        }
        if(this.playerOneScore < this.playerTwoScore){
            return this.playerTwoName
        }
    }
    hasWinner(){
        if(this.playerOneScore==4 && this.playerOneScore>this.playerTwoScore || this.playerTwoScore==4 && this.playerTwoScore>this.playerOneScore){
            return true
        }
        else{
            return false
        }
    }
    hasAdvantage(){
        if(this.playerOneScore >= 3 && this.playerOneScore == this.playerTwoScore+1 || this.playerTwoScore >= 3 && this.playerTwoScore == this.playerOneScore+1){
            return true
        }
        else{
            return false
        }
    }
    translateScore (num){
        if(num==0){
            return "Love"
        }
        else if(num==1){
            return "Fifteen"
        }
        else if(num==2){
            return "Thirty"
        }
        else if(num==3){
            return "Forty"
        }
    }
    getScore(){
        if(this.hasWinner()){
           return this.playerWithHighestScore() + " wins"
        }
        else if(this.hasAdvantage()){
            return "Advantage " +  this.playerWithHighestScore() 
        }
        else if(this.isDeuce()){
            return "Deuce"
        }
        else if (this.playerOneScore==this.playerTwoScore){
            return "Fifteen all"
        }
        else{
            return "Fifteen, Thirty"
        }
    }
}