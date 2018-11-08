export default {
    template: `
       <header class="main-header" >
        <nav class="navbar navbar-light light-blue lighten-4">
            <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="dark-blue-text"><i class="fa fa-bars fa-1x"></i></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link"  @click="goHome"> HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="Mail" >Mail</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="Keep" >Keep</a>
                    </li>
                    <li class="nav-item">
                        </li>
                </ul>
            </div>
        </nav>
        <!-- NAV BAR FOIR DESKTOP -->
        <div class="navbar-web-container">
            <li class="nav-item">
                <a class="nav-link" href="#"  @click="goHome" >HOME </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#" @click="Mail" >Mail</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" @click="Keep">Keep</a>
            </li>
          
            </ul>
        </div>
    </header>
`,
data() {
    return {
        main:''
    }
},
    methods: {
        goHome() {
            this.$emit('home')
            this.$router.push("/home");
        },
        Mail() {
            this.$emit('open-mail')
            this.$router.push("/mail");
        },
        Keep() {
            this.$emit('open-notes')
            this.$router.push("/keep");
        },
    },

    created(){
    }
}