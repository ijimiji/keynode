

  

 

<template>
  
    <div class="gameDisplay">
                <div class="wrapper">
                    <div class="typing-demo">
                      Game Over
                    </div>
        </div>
        
        <ul class="Words">
          <li class="Words-line">
          <p>&nbsp;</p>
         <p>Success Stages: {{successStage}}</p>
        </li>
         <li class="Words-line">
            <p>Success Stages: {{successStage}}</p>
             <p>Total Type: {{totalTypeCount}}</p>
          </li>
        <li class="Words-line">
            <p>Total Type: {{totalTypeCount}}</p>
            <p>Success Type: {{successTypeCount}}</p>
          </li>
           <li class="Words-line">
             <p>Success Type: {{successTypeCount}}</p>
             <p>Accuracy: {{accuracy}}%</p>
            </li>
            <li class="Words-line">
                <p>Accuracy: {{accuracy}}%</p>
               <p>&nbsp;</p>
            </li>
            <li class="Words-line">
                <button @click="gameStart">Retry</button>
            </li>    
           
            
          
          
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'GameEndDisplay',
    components: {},
    computed: {
      successStage() {
        return this.$store.state.successStage
      },
      totalTypeCount() {
        return this.successTypeCount + this.missTypeCount
      },
      successTypeCount() {
        return this.$store.state.typeSuccessCount
      },
      missTypeCount() {
        return this.$store.state.missCount
      },
      accuracy() {
        if (this.totalTypeCount === 0) {
            return 0
        }
        return Math.ceil((this.successTypeCount / this.totalTypeCount) * 100);
      }
    },
    methods: {
      gameStart() {
        this.$emit('game-start')
      }
    }
  }
</script>

<style scoped lang="scss">
     @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
    .gameDisplay {
        width: 50%;
        height: 50%;
        //border: 1px solid #CCC;
        margin: auto;
        position: relative;
    }
    wrapper {
        height: 100vh;
        /*This part is important for centering*/
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .typing-demo {
        width: 10ch;
        animation: typing 2.5s steps(22), blink .4s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
       font-family: 'Orbitron', sans-serif;
        font-size: 5em;
      }

      $total-lines: 6;
      $left-offset: 29px;
      $clip-height: 59px;
      $line-height: $clip-height - 10px;





/*
** Apply styles to the parent element
*/
.Words {
  margin: 0 auto;
  padding: 70px 0;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  font-size: 38px;
  font-weight: 900;
  letter-spacing: -1px;
  text-transform: uppercase;
  // Sort out nasty text fuzz
  transform: translate3d(0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -webkit-font-kerning: normal;
  -webkit-text-size-adjust: 100%;
}
.Words-line {
  height: $clip-height;
  overflow: hidden;
  position: relative;
  
  // Change the perspective of each alternating line
  &:nth-child(odd) {
    transform: skew(0deg, -3deg) scaleY(1.66667);
  }
  &:nth-child(even) {
    transform: skew(0deg, -3deg) scaleY(1.53333);
  }
  
  // Loop over the total lines and apply a left offset
  @for $i from 1 through $total-lines+1 {
    &:nth-child(#{$i}) {
      left: $left-offset * $i;
    }
  }
}


/*
** Fine-grained text styles
*/
p  {
  height: $clip-height;
  line-height: $line-height;
  padding: 1px;
  transition: all .9s ease-in-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
 
}

/*
** The hover interaction
*/
.Words:hover {
  p {
    transform: translate3d(0, -($clip-height),0);
  }
}
      @keyframes typing {
        from {
          width: 0
        }
      }
          
      @keyframes blink {
        50% {
          border-color: transparent
        }
}
</style>
