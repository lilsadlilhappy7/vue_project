<template>
  <div class="content-wrapper" style="min-height: 191px">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Cart Page</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Starter Page</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="invoice p-3 mb-3">
          <!-- title row -->
          <div class="row">
            <div class="col-12">
              <h4><i class="fas fa-globe"></i> Current Cart</h4>
            </div>
            <!-- /.col -->
          </div>
          <!-- info row -->

          <!-- Table row -->
          <div class="row">
            <div class="col-12 table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>total</th>
                    <th>discountPercentage</th>
                    <th>discountedTotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in cart?.products" :key="product.id">
                    <td><img style="width: 50px" :src="product.thumbnail" /></td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.quantity }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.total }}$</td>
                    <td>{{ product.discountPercentage }}%</td>
                    <td>{{ product.discountedTotal }}$</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->

          <div class="row">
            <!-- accepted payments column -->
            <div class="col-6"></div>
            <!-- /.col -->
            <div class="col-6">
              <p class="lead">Amount Due 2/22/2014</p>

              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <th style="width: 50%">Subtotal:</th>
                      <td>$250.30</td>
                    </tr>
                    <tr>
                      <th>Tax (9.3%)</th>
                      <td>$10.34</td>
                    </tr>
                    <tr>
                      <th>Shipping:</th>
                      <td>$5.80</td>
                    </tr>
                    <tr>
                      <th>Total:</th>
                      <td>$265.24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->

          <!-- this row will not appear when printing -->
          <div class="row no-print">
            <div class="col-12">
              <button type="button" class="btn btn-success float-right">
                <i class="far fa-credit-card"></i> Submit Payment
              </button>
              <button
                type="button"
                class="btn btn-primary float-right"
                style="margin-right: 5px"
              >
                <i class="fas fa-download"></i> Generate PDF
              </button>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
</template>

<script setup>
import { getCartItems } from "@/api/cart-api";
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const profile = computed(() => store.state.profile);

const cart = ref(null);

onMounted(async () => {
  LoadingModal();
  await fetchCartItems();
  CloseModal();
});

async function fetchCartItems() {
  try {
    const response = await getCartItems(profile.value.id);
    cart.value = response.data;
  } catch (error) {
    throw error;
  }
}
</script>