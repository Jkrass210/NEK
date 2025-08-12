export function validateForm1() {
  $.validator.addMethod("customEmail", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
  }, "Пожалуйста, введите корректный email");

  $("#serviceForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      nameCompany: {
        required: true,
        minlength: 2
      },
      post: {
        required: true,
        minlength: 2
      },
      mail: {
        required: true,
        customEmail: true
      },
      problemDescription: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Пожалуйста, введите ваше ФИО",
        minlength: "Введите минимум 2 символа"
      },
      nameCompany: {
        required: "Пожалуйста, введите название компании",
        minlength: "Введите минимум 2 символа"
      },
      post: {
        required: "Пожалуйста, введите вашу должность",
        minlength: "Введите минимум 2 символа"
      },
      mail: {
        required: "Пожалуйста, введите ваш email",
        email: "Введите корректный email"
      },
      problemDescription: {
        required: "Пожалуйста, опишите проблему",
        minlength: "Введите минимум 10 символов"
      }
    },
    errorElement: "span",
    errorPlacement: function (error, element) {
      error.addClass("form-1__error");
      element.after(error);
    },
    highlight: function (element, errorClass) {
      $(element).addClass("form-1__input--error");
    },
    unhighlight: function (element, errorClass) {
      $(element).removeClass("form-1__input--error");
    },
    submitHandler: function (form) {
      // Здесь можно добавить AJAX отправку формы
      const body = document.querySelector('body')
      const modal = document.querySelector('#serviceFormModal');
      body.style.overflow = 'hidden';
      modal.style.display = 'flex';
      form.reset();

      function closeModal() {
        body.style.overflow = '';
        modal.style.display = 'none';
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('click', handleOutsideClick);
      }

      function handleEscape(e) {
        if (e.key === 'Escape') closeModal();
      }

      function handleOutsideClick(e) {
        const window = modal.querySelector('.popup-modal__window');
        if (window && !window.contains(e.target)) {
          closeModal();
        }
      }

      function initModal() {
        const closeBtn = modal.querySelector('.close');
        if (closeBtn) {
          closeBtn.addEventListener('click', closeModal);
        }
        document.addEventListener('keydown', handleEscape);
        document.addEventListener('click', handleOutsideClick);
      }

      initModal();

      modal.dataset.cleanup = 'true';
    }
  });
}