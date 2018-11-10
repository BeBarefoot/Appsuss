export default {
    template: `
       <header class="main-header" >
        <nav class="navbar navbar-light light-blue lighten-4">
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="dark-blue-text"><i class="fa fa-bars fa-1x"></i></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link"  @click="goHome">  <i class="fas fa-home"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="Mail" > <i class="fas fa-at"></i>Mail</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="Keep" > <i class="far fa-sticky-note"></i>Keep</a>
                    </li>
                    <li class="nav-item">
                        </li>
                </ul>
            </div>
        </nav>
        <!-- NAV BAR FOIR DESKTOP -->
        <div class="navbar-web-container">
            <li class="nav-item">
                <a class="nav-link" href="#"  @click="goHome" >  <i class="fas fa-home"></i> </a> 
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#" @click="Mail" > <i class="fas fa-at"></i>  Mail</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" @click="Keep"><i class="far fa-edit"></i> Keep</a>
            </li>
          
            </ul>
        </div>
    </header>
`,
    data() {
        return {
            main: ''
        }
    },
    methods: {
        goHome() {
            this.$emit('home')
            this.$router.push("/");
        },
        Mail() {
            this.$emit('open-mail')
            this.$router.push("/mail/inbox");
        },
        Keep() {
            this.$emit('open-notes')
            this.$router.push("/keep");
        },
    },

    created() {}
}