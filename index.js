// ��ȡ��ť�͸������ֵ�����

const toggleButtonS2 = document.getElementById("toggle-button-s2");
const s2Content = document.querySelector(".s2");

const toggleButtonS3 = document.getElementById("toggle-button-s3");
const s3Content = document.querySelector(".s3");

const toggleButtonS4 = document.getElementById("toggle-button-s4");
const s4Content = document.querySelector(".s4");

const toggleButtonS5 = document.getElementById("toggle-button-s5");
const s5Content = document.querySelector(".s5");

// ��ӵ���¼�������
toggleButtonS2.addEventListener("click", () => toggleSection(s2Content, toggleButtonS2));
toggleButtonS3.addEventListener("click", () => toggleSection(s3Content, toggleButtonS3));
toggleButtonS4.addEventListener("click", () => toggleSection(s4Content, toggleButtonS4));
toggleButtonS5.addEventListener("click", () => toggleSection(s5Content, toggleButtonS5));

// �л����ֵ���ʾ״̬�Ͱ�ť�ı�
function toggleSection(section, button) {
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        button.textContent = "-";
    } else {
        section.style.display = "none";
        button.textContent = "+";
    }
}

// 123
