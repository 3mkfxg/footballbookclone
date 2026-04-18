// Navigation and UI interactions
document.addEventListener('DOMContentLoaded', () => {
    // Burger Menu Toggle
    const burgerToggle = document.getElementById('burgerToggle');
    const navMenu = document.getElementById('navMenu');

    if (burgerToggle && navMenu) {
        burgerToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Login logic
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const chkAgree = document.getElementById('chkAgree');
            if (!chkAgree.checked) {
                Swal.fire({
                    icon: 'warning',
                    title: 'تنبيه',
                    text: 'يجب الموافقة على التعليمات أولاً',
                    confirmButtonText: 'حسناً',
                    confirmButtonColor: '#921937'
                });
                return;
            }

            // Show Instructions Modal first (SweetAlert2)
            showInstructions();
        });
    }
});

function showInstructions() {
    Swal.fire({
        title: '<b>تعليمات استخدام الملاعب - جامعة الإسراء</b>',
        html: `
            <div style="text-align: right; font-size: 0.9rem; line-height: 1.8;">
                <p><b>أولاً: الحجز والدخول</b></p>
                <ul>
                    <li>يجب حجز الملعب مسبقاً قبل 48 ساعة.</li>
                    <li>الالتزام بالوقت المحدد للحجز الزامي.</li>
                </ul>
                <p><b>ثانياً: الاستخدام والسلوك</b></p>
                <ul>
                    <li>يمنع منعاً باتاً إدخال الطعام أو الشراب إلى الملعب.</li>
                    <li>التدخين ممنوع نهائياً داخل الملاعب.</li>
                </ul>
            </div>
        `,
        width: '600px',
        confirmButtonText: 'أوافق وأرغب بالدخول',
        confirmButtonColor: '#4CAF50',
        showCancelButton: true,
        cancelButtonText: 'إلغاء',
        customClass: {
            popup: 'arabic-popup'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirect to home page (simulated success)
            window.location.href = 'home.html';
        }
    });
}
