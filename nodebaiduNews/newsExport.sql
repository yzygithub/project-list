-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 12, 2017 at 10:57 AM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `newsId` int(11) NOT NULL COMMENT '自动增长',
  `newsType` char(20) DEFAULT NULL,
  `newsTitle` varchar(100) NOT NULL,
  `newsImg` varchar(200) NOT NULL,
  `newsTime` date NOT NULL,
  `newsSrc` char(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`newsId`, `newsType`, `newsTitle`, `newsImg`, `newsTime`, `newsSrc`) VALUES
(1, '推荐', '测试数据库第一条数据', 'img/newsimg/news1.JPEG', '2017-06-03', 'yzy'),
(6, '推荐', '测试2', 'img/newsimg/news2.JPEG', '2017-06-04', 'yzy2'),
(15, '互联网', 'node express3', 'img/newsimg/news5.JPEG', '2017-06-10', 'nodetest2'),
(16, '科技', 'node express test', 'img/newsimg/news6.JPEG', '2016-06-11', 'express');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsId`),
  ADD KEY `newsTitle` (`newsTitle`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `newsId` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长', AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
