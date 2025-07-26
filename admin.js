// Admin.js for admin panel functionality

document.addEventListener('DOMContentLoaded', function() {
    // Admin login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // In production, this would authenticate against a backend
            // For demo purposes, we'll use fixed credentials
            if (username === 'admin' && password === 'admin123') {
                // Redirect to admin dashboard
                window.location.href = 'dashboard.html';
            } else {
                alert('اسم المستخدم أو كلمة المرور غير صحيحة');
            }
        });
    }
    
    // Add new product functionality
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const productName = document.getElementById('productName').value;
            const productDescription = document.getElementById('productDescription').value;
            const productPrice = document.getElementById('productPrice').value;
            const productImages = document.getElementById('productImages').files;
            
            // In production, this would send data to a backend API
            // For demo purposes, we'll just show an alert
            if (productName && productDescription && productPrice && productImages.length >= 3) {
                alert('تم إضافة المنتج بنجاح!');
                addProductForm.reset();
            } else {
                alert('يرجى ملء جميع الحقول وتوفير على الأقل 3 صور');
            }
        });
    }
    
    // Product management (list, edit, delete)
    function renderProducts() {
        // In production, this would fetch products from a backend API
        // For demo purposes, we'll use sample data
        const products = [
            {
                id: 1,
                name: 'المنتج الأول',
                price: 150,
                images: [
                    'https://via.placeholder.com/100x100?text=Product+1+Image+1'
                ]
            },
            {
                id: 2,
                name: 'المنتج الثاني',
                price: 250,
                images: [
                    'https://via.placeholder.com/100x100?text=Product+2+Image+1'
                ]
            }
        ];
        
        const productsTableBody = document.getElementById('productsTableBody');
        if (productsTableBody) {
            productsTableBody.innerHTML = '';
            products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price} جنيه</td>
                    <td>
                        <img src="${product.images[0]}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover;">
                    </td>
                    <td>
                        <button class="btn btn-sm btn-primary edit-product" data-product-id="${product.id}">تعديل</button>
                        <button class="btn btn-sm btn-danger delete-product" data-product-id="${product.id}">حذف</button>
                    </td>
                `;
                productsTableBody.appendChild(row);
            });
        }
    }
    
    // Initialize product list if on dashboard
    if (document.getElementById('productsTableBody')) {
        renderProducts();
        
        // Add event listeners for edit and delete buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('edit-product')) {
                const productId = e.target.dataset.productId;
                alert(`Editing product ${productId}`);
                // In production, this would redirect to an edit page or open a modal
            } else if (e.target.classList.contains('delete-product')) {
                const productId = e.target.dataset.productId;
                if (confirm('هل تريد حذف هذا المنتج؟')) {
                    alert(`Deleted product ${productId}`);
                    // In production, this would send a request to the backend to delete the product
                }
            }
        });
    }
});
