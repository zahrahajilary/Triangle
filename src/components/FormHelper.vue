<template>
    <div>
        <div id="form-header">
            <slot name="form-header"></slot>
        </div>
        <div id="form-body">
            <slot>
                <slot name="form-body"></slot>
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>