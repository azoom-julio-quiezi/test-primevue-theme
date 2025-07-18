<template>
  <div class="demo-page">
    <div class="container">
      <h1>AZ Components Demo</h1>
      <p class="description">A comprehensive showcase of AZ components and PrimeVue elements</p>

      <!-- Breadcrumb Section -->
      <section class="demo-section">
        <h2>Breadcrumb Component</h2>
        <div class="demo-item">
          <h3>Basic Breadcrumb</h3>
          <v-breadcrumb :model="breadcrumbItems" />
        </div>
        
        <div class="demo-item">
          <h3>Custom Home Breadcrumb</h3>
          <v-breadcrumb 
            :home="{ label: 'Dashboard', url: '/dashboard' }"
            :model="breadcrumbItems" />
        </div>
      </section>

      <!-- Label Section -->
      <section class="demo-section">
        <h2>Label Component</h2>
        <div class="demo-item">
          <h3>Basic Labels</h3>
          <div class="label-demo">
            <v-label label="Basic Label" />
            <v-label label="Required Label" required />
            <v-label label="Required with Text" required variant="text" />
            <v-label label="Large Label" size="lg" />
            <v-label label="Small Label" size="sm" />
          </div>
        </div>
        
        <div class="demo-item">
          <h3>Labels with Form Elements</h3>
          <div class="form-demo">
            <v-label label="Email Address" html-for="email" required />
            <input type="email" id="email" placeholder="Enter your email" />
            
            <v-label label="Phone Number" html-for="phone" />
            <input type="tel" id="phone" placeholder="Enter your phone" />
          </div>
        </div>
      </section>

      <!-- Link Section -->
      <section class="demo-section">
        <h2>Link Component</h2>
        <div class="demo-item">
          <h3>Link Variants</h3>
          <div class="link-demo">
            <v-link label="Primary Link" href="/primary" semantic-color="primary" />
            <v-link label="Text Link" href="/text" semantic-color="text" />
            <v-link label="Traditional Link" href="/traditional" semantic-color="traditional" />
            <v-link label="External Link" href="https://example.com" external />
            <v-link label="Small Link" href="/small" size="sm" />
            <v-link label="Large Link" href="/large" size="lg" />
          </div>
        </div>
      </section>

      <!-- Button Section -->
      <section class="demo-section">
        <h2>PrimeVue Buttons</h2>
        <div class="demo-item">
          <h3>Button Variants</h3>
          <div class="button-demo">
            <v-button label="Primary" />
            <v-button label="Secondary" severity="secondary" />
            <v-button label="Success" severity="success" />
            <v-button label="Info" severity="info" />
            <v-button label="Warning" severity="warn" />
            <v-button label="Danger" severity="danger" />
          </div>
        </div>
        
        <div class="demo-item">
          <h3>Button Styles</h3>
          <div class="button-demo">
            <v-button label="Filled" />
            <v-button label="Outlined" outlined />
            <v-button label="Text" text />
            <v-button label="Link" link />
          </div>
        </div>
        
        <div class="demo-item">
          <h3>Button Sizes</h3>
          <div class="button-demo">
            <v-button label="Small" size="small" />
            <v-button label="Normal" />
            <v-button label="Large" size="large" />
          </div>
        </div>
        
        <div class="demo-item">
          <h3>Button with Icons</h3>
          <div class="button-demo">
            <v-button label="Save">
              <template #icon>
                <az-icon name="file-save" size="16" />
              </template>
            </v-button>
            <v-button label="Delete" severity="danger">
              <template #icon>
                <az-icon name="delete" size="16" />
              </template>
            </v-button>
            <v-button text>
              <template #icon>
                <az-icon name="heart" size="16" />
              </template>
            </v-button>
            <v-button outlined>
              <template #icon>
                <az-icon name="star" size="16" />
              </template>
            </v-button>
          </div>
        </div>
      </section>

      <!-- InputNumber Section -->
      <section class="demo-section">
        <h2>PrimeVue InputNumber</h2>
        <div class="demo-item">
          <h3>Basic InputNumber</h3>
          <div class="input-demo">
            <v-label label="Basic Number Input" html-for="basic-number" />
            <v-input-number id="basic-number" v-model="basicNumber" />
          </div>
        </div>
        
        <div class="demo-item">
          <h3>InputNumber with Formatting</h3>
          <div class="input-demo">
            <v-label label="Currency Input" html-for="currency-number" />
            <v-input-number 
              id="currency-number" 
              v-model="currencyNumber" 
              mode="currency" 
              currency="USD" 
              locale="en-US" />
          </div>
        </div>
        
        <div class="demo-item">
          <h3>InputNumber with Min/Max</h3>
          <div class="input-demo">
            <v-label label="Limited Range" html-for="range-number" />
            <v-input-number 
              id="range-number" 
              v-model="rangeNumber" 
              :min="0" 
              :max="100" 
              :step="5" />
          </div>
        </div>
        
        <div class="demo-item">
          <h3>InputNumber with Suffix</h3>
          <div class="input-demo">
            <v-label label="Percentage Input" html-for="percent-number" />
            <v-input-number 
              id="percent-number" 
              v-model="percentNumber" 
              suffix="%" 
              :min="0" 
              :max="100" />
          </div>
        </div>
      </section>

      <!-- Dialog Section -->
      <section class="demo-section">
        <h2>Dialog Component</h2>
        <div class="demo-item">
          <h3>Basic Dialog</h3>
          <v-button label="Open Basic Dialog" @click="showBasicDialog = true" />
          
          <v-dialog 
            v-model:visible="showBasicDialog" 
            header="Basic Dialog" 
            modal>
            <p>This is a basic dialog with custom close button.</p>
            <template #footer>
              <v-button label="Close" @click="showBasicDialog = false" />
            </template>
          </v-dialog>
        </div>
        
        <div class="demo-item">
          <h3>Form Dialog</h3>
          <v-button label="Open Form Dialog" @click="showFormDialog = true" />
          
          <v-dialog 
            v-model:visible="showFormDialog" 
            header="User Information" 
            modal 
            :style="{ width: '50rem' }">
            <div class="form-dialog">
              <v-label label="Name" html-for="dialog-name" required />
              <input type="text" id="dialog-name" v-model="formData.name" placeholder="Enter your name" />
              
              <v-label label="Email" html-for="dialog-email" required />
              <input type="email" id="dialog-email" v-model="formData.email" placeholder="Enter your email" />
              
              <v-label label="Age" html-for="dialog-age" />
              <v-input-number id="dialog-age" v-model="formData.age" :min="0" :max="120" />
            </div>
            <template #footer>
              <v-button label="Cancel" severity="secondary" @click="showFormDialog = false" />
              <v-button label="Save" @click="saveForm" />
            </template>
          </v-dialog>
        </div>
      </section>

      <!-- Confirm Dialog Section -->
      <section class="demo-section">
        <h2>Confirm Dialog Component</h2>
        <div class="demo-item">
          <h3>Confirm Dialog Examples</h3>
          <div class="confirm-demo">
            <v-button label="Basic Confirm" @click="showBasicConfirm" />
            <v-button label="Delete Confirm" severity="danger" @click="showDeleteConfirm" />
            <v-button label="Info Confirm" severity="info" @click="showInfoConfirm" />
            <v-button label="Success Confirm" severity="success" @click="showSuccessConfirm" />
          </div>
        </div>
      </section>

      <!-- Interactive Demo Section -->
      <section class="demo-section">
        <h2>Interactive Demo</h2>
        <div class="demo-item">
          <h3>Complete Form Example</h3>
          <div class="interactive-form">
            <v-label label="Product Name" html-for="product-name" required />
            <input type="text" id="product-name" v-model="productForm.name" placeholder="Enter product name" />
            
            <v-label label="Price" html-for="product-price" required />
            <v-input-number 
              id="product-price" 
              v-model="productForm.price" 
              mode="currency" 
              currency="USD" 
              locale="en-US" />
            
            <v-label label="Quantity" html-for="product-quantity" />
            <v-input-number 
              id="product-quantity" 
              v-model="productForm.quantity" 
              :min="0" 
              :step="1" />
            
            <div class="form-actions">
              <v-button label="Save Product" @click="saveProduct" />
              <v-button label="Reset" severity="secondary" @click="resetProductForm" />
            </div>
          </div>
        </div>
      </section>

      <!-- Japanese Font Demo Section -->
      <section class="demo-section">
        <h2>Japanese Font Demonstration</h2>
        <div class="demo-item">
          <h3>Japanese Text Examples</h3>
          <div class="japanese-demo">
            <div class="japanese-text">
              <h4>Japanese with parentheses and brackets</h4>
              <p class="japanese-example">（テスト）「テスト」［テスト］</p>
            </div>
            
            <div class="japanese-text">
              <h4>Japanese with punctuation</h4>
              <p class="japanese-example">テスト、テスト。テスト</p>
            </div>
            
            <div class="japanese-text">
              <h4>Mixed Japanese and English with half-width characters and full-width characters</h4>
              <p class="japanese-example">English(半角)日本語（全角）</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Global Confirm Dialog -->
    <v-confirm-dialog />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useConfirm } from 'primevue/useconfirm'

// Breadcrumb data
const breadcrumbItems = ref([
  { label: 'Products', url: '/products' },
  { label: 'Electronics', url: '/products/electronics' },
  { label: 'Smartphones' }
])

// Dialog states
const showBasicDialog = ref(false)
const showFormDialog = ref(false)

// Form data
const formData = reactive({
  name: '',
  email: '',
  age: null
})

const productForm = reactive({
  name: '',
  price: null,
  quantity: 1
})

// InputNumber values
const basicNumber = ref(0)
const currencyNumber = ref(0)
const rangeNumber = ref(50)
const percentNumber = ref(25)

// Confirm dialog - using PrimeVue's native useConfirm
const confirm = useConfirm()

const showBasicConfirm = () => {
  confirm.require({
    header: 'Basic Confirmation',
    message: 'Are you sure you want to proceed?',
    icon: 'help',
    iconProps: {
      type: 'tight',
      size: 24,
      color: 'blue',
      bounded: 'tight'
    },
    accept: () => {
      console.log('User accepted')
    },
    reject: () => {
      console.log('User rejected')
    }
  })
}

const showDeleteConfirm = () => {
  confirm.require({
    header: 'Delete Confirmation',
    message: 'This action cannot be undone. Are you sure you want to delete this item?',
    icon: 'warning',
    iconProps: {
      type: 'filled',
      size: 20
    },
    acceptLabel: 'Delete',
    rejectLabel: 'Cancel',
    acceptProps: {
      severity: 'danger'
    },
    accept: () => {
      console.log('Item deleted')
    }
  })
}

const showInfoConfirm = () => {
  confirm.require({
    header: 'Information',
    message: 'This is an informational message with custom styling.',
    icon: 'info',
    iconProps: {
      type: 'filled',
      size: 24
    },
    acceptLabel: 'Got it',
    rejectLabel: 'Dismiss',
    acceptProps: {
      severity: 'info'
    }
  })
}

const showSuccessConfirm = () => {
  confirm.require({
    header: 'Success',
    message: 'Operation completed successfully!',
    icon: 'check',
    iconProps: {
      type: 'filled',
      size: 20
    },
    acceptLabel: 'Continue',
    rejectLabel: 'Close',
    acceptProps: {
      severity: 'success'
    }
  })
}

// Form actions
const saveForm = () => {
  console.log('Form data:', formData)
  showFormDialog.value = false
}

const saveProduct = () => {
  console.log('Product data:', productForm)
  confirm.require({
    header: 'Save Product',
    message: 'Are you sure you want to save this product?',
    icon: 'help',
    iconProps: {
      type: 'outline',
      size: 20
    },
    accept: () => {
      console.log('Product saved')
    }
  })
}

const resetProductForm = () => {
  productForm.name = ''
  productForm.price = null
  productForm.quantity = 1
}
</script>

<style scoped>
.demo-page {
  padding: 2rem;
  background-color: var(--p-surface-50);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: var(--p-surface-900);
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
}

.description {
  color: var(--p-surface-600);
  font-size: 1.125rem;
  margin-bottom: 3rem;
}

.demo-section {
  background: var(--p-surface-0);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
  color: var(--p-surface-900);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid var(--p-primary-100);
  padding-bottom: 0.5rem;
}

.demo-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid var(--p-surface-200);
  border-radius: 0.5rem;
  background: var(--p-surface-50);
}

.demo-item:last-child {
  margin-bottom: 0;
}

.demo-item h3 {
  color: var(--p-surface-800);
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.label-demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-demo input {
  padding: 0.75rem;
  border: 1px solid var(--p-surface-300);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-demo input:focus {
  outline: none;
  border-color: var(--p-primary-500);
  box-shadow: 0 0 0 3px var(--p-primary-100);
}

.link-demo {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.button-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.input-demo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 300px;
}

.confirm-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.form-dialog {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-dialog input {
  padding: 0.75rem;
  border: 1px solid var(--p-surface-300);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-dialog input:focus {
  outline: none;
  border-color: var(--p-primary-500);
  box-shadow: 0 0 0 3px var(--p-primary-100);
}

.interactive-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
}

.interactive-form input {
  padding: 0.75rem;
  border: 1px solid var(--p-surface-300);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.interactive-form input:focus {
  outline: none;
  border-color: var(--p-primary-500);
  box-shadow: 0 0 0 3px var(--p-primary-100);
}

.form-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.japanese-demo {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.japanese-text {
  padding: 1rem;
  border: 1px solid var(--p-surface-200);
  border-radius: 0.5rem;
  background: var(--p-surface-0);
}

.japanese-text h4 {
  color: var(--p-surface-700);
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.japanese-example {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--p-surface-900);
  margin: 0;
  font-family: 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', 'Meiryo', sans-serif;
}

/* Dark mode support */
:root[class='p-dark'] .demo-page {
  background-color: var(--p-surface-900);
}

:root[class='p-dark'] .demo-section {
  background: var(--p-surface-800);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

:root[class='p-dark'] .demo-item {
  background: var(--p-surface-700);
  border-color: var(--p-surface-600);
}

:root[class='p-dark'] .form-demo input,
:root[class='p-dark'] .form-dialog input,
:root[class='p-dark'] .interactive-form input {
  background: var(--p-surface-600);
  border-color: var(--p-surface-500);
  color: var(--p-surface-0);
}

:root[class='p-dark'] .form-demo input:focus,
:root[class='p-dark'] .form-dialog input:focus,
:root[class='p-dark'] .interactive-form input:focus {
  border-color: var(--p-primary-400);
  box-shadow: 0 0 0 3px var(--p-primary-900);
}
</style>