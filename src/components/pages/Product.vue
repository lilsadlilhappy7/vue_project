<template>
  <div class="content-wrapper" style="min-height: 191px">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Product Page</h1>
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
        <router-link :to="'/cart/'">cart</router-link>
        <div class="row">
          <div v-for="p in products" :key="p.id" class="col-3">
            <div class="card card-primary card-outline">
              <div class="card-body box-profile">
                <div class="text-center">
                  <img
                    class="profile-user-img img-fluid img-circle"
                    :src="p.thumbnail"
                    alt="User profile picture"
                  />
                </div>

                <h3 class="profile-username text-center">{{ p.title }}</h3>

                <p class="text-muted text-center">{{ p.brand }}</p>

                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <b>Followers</b> <a class="float-right">1,322</a>
                  </li>
                  <li class="list-group-item">
                    <b>Following</b> <a class="float-right">543</a>
                  </li>
                  <li class="list-group-item">
                    <b>Friends</b> <a class="float-right">13,287</a>
                  </li>
                </ul>

                <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
              </div>
              <!-- /.card-body -->
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
import { getAllProducts } from "@/api/product-api";
import { onBeforeMount, onMounted, ref } from "vue";

const products = ref([]);

onBeforeMount(() => {
  console.log(products.value);
  console.log("Product onBeforeMount");
});

onMounted(async () => {
  try {
    const productResult = await getAllProducts();
    products.value = productResult.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>
