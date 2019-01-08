<template>
    <div>
        <input type="submit" @click="checking(aLine,bLine,cLine)" :disabled="activeBtn(aLine,bLine,cLine)" value="Check" />
        
        <result/>

    </div>
</template>
<script>
import Result from './Result'
export default {
    props:['aLine','bLine','cLine','activeBtn','checking'],
    data(){
        return{
            
        }
    },
    components:{
        Result
    }
    
}
</script>