'use strict';

//Function for readme button
function updateLog(){
	var code = Blockly.C.workspaceToCode(Blockly.getMainWorkspace());
	document.getElementById('code').value = code;
}


//Function to download code
function downloadCode() {
	var code = Blockly.C.workspaceToCode();
	var codeArray = [];
	codeArray.push(code);
	
	var codeBlob = new Blob(codeArray, {type: "text/plain;charset=utf-8"});
	saveAs(codeBlob, "main.cpp");
}

function test1() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/005.png";
    // �� â ����
    var newWindow = window.open('', 'Example using I/O');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "����, ����� Ȱ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test2() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/006.png";
    // �� â ����
    var newWindow = window.open('', 'Example using string');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "���ڿ� Ȱ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test3() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/007.png";
    // �� â ����
    var newWindow = window.open('', 'Example using if');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "if�� Ȱ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test4() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/008.png";
    // �� â ����
    var newWindow = window.open('', 'Example using switch');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "switch�� Ȱ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test5() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/009.png";
    // �� â ����
    var newWindow = window.open('', 'Example using while/for');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "while, for�� Ȱ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test6() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/010.png";
    // �� â ����
    var newWindow = window.open('', 'Example using function');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "�Լ�Ȱ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test7() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/011.png";
    // �� â ����
    var newWindow = window.open('', 'Example using class');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "classȰ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test8() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/012.png";
    // �� â ����
    var newWindow = window.open('', 'Example using struct');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "structȰ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test9() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/013.png";
    // �� â ����
    var newWindow = window.open('', 'Example using array, vector');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "attay, vectorȰ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test10() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/001.png";
    // �� â ����
    var newWindow = window.open('', 'Example using stack');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "stackȰ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test11() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/002.png";
    // �� â ����
    var newWindow = window.open('', 'Example using queue');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "queueȰ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test12() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/003.png";
    // �� â ����
    var newWindow = window.open('', 'Example using deque');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "dequeȰ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

function test13() {
    // �̹��� ��θ� ���⿡ �Է�
    var imageUrl = "../../media/004.png";
    // �� â ����
    var newWindow = window.open('', 'Example using pointer');

    // �̹��� ��� ����
    var imageElement = document.createElement("img");

    // �̹��� �Ӽ� ����
    imageElement.src = imageUrl;
    imageElement.alt = "pointerȰ�� ����";

    // �̹����� �� â�� �߰�
    newWindow.document.body.appendChild(imageElement);
}

//function to load
function readFile(input){

	let file = input.files[0];
	
	let reader = new FileReader();
	
	reader.readAsText(file);
	
	reader.onload = function(){
		Blockly.mainWorkspace.clear();
		
		let saveXML = reader.result;

		let textToDom = Blockly.Xml.textToDom(saveXML);
		Blockly.Xml.domToWorkspace(textToDom, Blockly.mainWorkspace);
	};
	
	reader.onerror = function() {
		console.log(reader.error);
	};
	
}



//Function to save
function downloadXML() {
	//Grab the workspace XML
	let codeXML = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	
	//Prettify the XML
	let saveXML = Blockly.Xml.domToPrettyText(codeXML);
	
	var codeArray = [];
	codeArray.push(saveXML);

	console.log(Blockly.mainWorkspace);

	console.log(saveXML);
	
	//Get current date, used to make sure no save file with overwrite another
	
	var today = new Date();
	
	var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
	
	var codeBlob = new Blob(codeArray, {type: "text/plain;charset=utf-8"});
	saveAs(codeBlob, "blockly save " + time + ".txt");
}










