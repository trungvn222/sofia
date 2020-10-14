<template>
<form action="" @submit="checkForm">
    <div class="container">
        <heading class="mb-3 text-center" title="Request A Quote" />
        <div class="row">
            <div class="col-12 col-md-6 mb-3">
                <input type="text" name="your-first-name" v-model="firstName" class="sofia-input w-100" size="40" placeholder="Frist Name (*)">
                <div v-if="errors.firstName" class="error">{{errors.firstName}}</div>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <input type="text" name="your-last-name" v-model="lastName" class="sofia-input w-100" size="40" placeholder="Last Name (*)">
                <div v-if="errors.lastName" class="error">{{errors.lastName}}</div>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <input type="text" name="your-email" v-model="email" class="sofia-input w-100" size="40" placeholder="Email (*)">
                <div v-if="errors.email" class="error">{{errors.email}}</div>
            </div>
            <div class="col-12 col-md-6 mb-3">
                <input type="text" name="your-phone" v-model="phone" class="sofia-input w-100" size="40" placeholder="Phone Number (*)">
                <div v-if="errors.phone" class="error">{{errors.phone}}</div>
            </div>
            <div class="col-12 mb-3">
                <textarea name="your-message" cols="40" v-model="message" class="sofia-input w-100" rows="10" placeholder="Description"></textarea>
                <div v-if="errors.message" class="error">{{errors.message}}</div>
            </div>
            <div class="col-12 text-center">
                <button class="btn-primary" type="submit">SEND MESSAGE</button>
            </div>

        </div>
        <p v-if="messageSuccess" class="message-success">{{messageSuccess}}</p>
    </div>
</form>
</template>

<script lang="ts">
import {
    defineComponent,
} from 'vue'
import Heading from "@/components/Heading.vue";

interface Errors {
    [key: string]: string
}

export default defineComponent({

    data() {
        return {
            errors: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            },
            messageSuccess: '',
            firstName: '',
            lastName: '',
            phone: '',
            message: '',
            email: ''
        }
    },
    methods: {
        resetForm() {
            this.errors = {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            };
            this.messageSuccess = "";
        },
        isPassed(): boolean {
            const errors: Errors = this.errors;
            for (const error in errors) {
                if (errors[error] !== '') {
                    return false;
                }
            }
            return true;
        },
        checkForm: function (e: HTMLFormElement) {
            this.resetForm();

            if (!this.firstName) {
                this.errors['firstName'] = 'First Name is required.';
            }
            if (!this.lastName) {
                this.errors['lastName'] = 'Last Name is required.';
            }
            if (!this.phone) {
                this.errors['phone'] = 'Phone is required.';
            }

            if (!this.validEmail(this.email)) {
                this.errors['email'] = 'Email is invalid format.';
            }
            if (!this.email) {
                this.errors['email'] = 'Email is required.';
            }

            if (this.isPassed()) {
                this.$emit('submitsuccess', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phone: this.phone,
                    message: this.message,
                    email: this.email
                });
                this.messageSuccess = 'Send mail Success';
            }

            e.preventDefault();
        },
        validEmail: function (email: string): boolean {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    },
    components: {
        Heading
    }
})
</script>

<style lang="scss">
.sofia-input {
    padding: 9px 20px;
    background: var(--form-bg);
    border: 0px;
}

.error {
    color: red;
    line-height: 1.4;
    font-size: 14px;
}

.message-success {
    text-align: center;
    background: green;
    color: #fff;
    width: 100%;
    padding: 10px 10px;
    margin-top: 20px;
}
</style>
