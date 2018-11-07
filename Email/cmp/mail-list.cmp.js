import mailPreview from "./mail-preview.cmp.js";

export default {
  props: ["mails"],
  template: `
    <div>
        <section >
            <ul class="mail-list">
              <mail-preview v-for="mail in mails" :currMail='mail'></mail-preview>
            </ul>
        </section>
    </div>
    `,
  components: {
    mailPreview
  },
  created() {
  }
};
